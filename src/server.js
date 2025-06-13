const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const { prisma } = require("../lib/prisma");

async function getLatestClientId() {
  try {
    console.log("Starting getLatestClientId query...");
    const client = await prisma.client.findFirst({
      orderBy: {
        id: "desc",
      },
      select: {
        clientId: true,
      },
    });
    console.log("Raw query result:", client);

    // Check if client exists and has a valid clientId
    if (client && client.clientId) {
      console.log("Client ID exists:", client.clientId);
      const nextId = parseInt(client.clientId) + 1;
      console.log("Next client ID will be:", nextId);
      return nextId;
    } else {
      console.log("No valid client found, starting with ID 1");
      return 1;
    }
  } catch (error) {
    console.error("Error in getLatestClientId:", error);
  }
}

const app = express();

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173", // Development
  "http://localhost:3000", // Alternative development port
  "https://nhakhoamyduc.vn", // Production URL from environment variable
  "https://www.nhakhoamyduc.vn",
].filter(Boolean); // Remove any undefined values

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true, // This is important for cookies
  })
);

app.use(express.json());
app.use(cookieParser());

// Registration endpoint
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, hashedPassword },
    });
    res.json({
      message: "User registered",
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Set a cookie with the user's ID
    res.cookie("userId", user.id, {
      httpOnly: true,
      secure: true, // Always use secure in production
      sameSite: "none", // Allow cross-site cookies
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      domain: process.env.COOKIE_DOMAIN || undefined, //Render environment variables
    });

    console.log("process.env.COOKIE_DOMAIN", process.env.COOKIE_DOMAIN);
    console.log("Login req cookies", res.cookies);

    res.json({
      message: "Login successful",
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

// Check authentication status
app.get("/api/check-auth", async (req, res) => {
  console.log("Check auth req cookies", req.cookies);
  console.log("All cookies:", JSON.stringify(req.cookies, null, 2));
  const userId = req.cookies.userId;
  if (!userId) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
    res.json({ user: { id: user.id, email: user.email } });
  } catch (error) {
    res.status(500).json({ error: "Authentication check failed" });
  }
});

// Logout endpoint
app.post("/api/logout", (req, res) => {
  console.log("Received request to /api/logout");
  res.clearCookie("userId", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    domain: process.env.COOKIE_DOMAIN || undefined,
  });
  console.log("Log out res cookies", res.cookies);
  res.json({ message: "Logged out successfully" });
});

// Client endpoint
app.get("/api/clients", async (req, res) => {
  console.log("Received request to /api/clients");
  const search = req.query.search;
  const mode = req.query.mode;
  console.log("Search query:", search);
  try {
    if (search) {
      console.log("Searching with query:", search);
      const searchInt = parseInt(search);
      const isNumeric = !isNaN(searchInt);
      const orConditions = [
        { fullName: { contains: search, mode: "insensitive" } },
        { birthYearAndName: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { phone: { contains: search, mode: "insensitive" } },
        { address: { contains: search, mode: "insensitive" } },
        { clientDocument: { contains: search, mode: "insensitive" } },
        { clientId: { contains: search, mode: "insensitive" } },
      ];
      if (isNumeric) {
        orConditions.push({ birthYear: { equals: searchInt } });
      }
      const clients = await prisma.client.findMany({
        where: {
          OR: orConditions,
        },
      });
      console.log("Found clients:", clients.length);
      res.json(clients);
    } else {
      if (mode === "all") {
        const clients = await prisma.client.findMany({
          orderBy: {
            updatedAt: "desc",
          },
        });
        console.log("Found clients:", clients.length);
      } else {
        console.log("Fetching top 100 clients");
        const clients = await prisma.client.findMany({
          orderBy: {
            updatedAt: "desc",
          },
          take: 100,
          skip: 0,
        });
        console.log("Found clients:", clients.length);
      }
      res.json(clients);
    }
  } catch (error) {
    console.error("Error in /api/clients:", error);
    res.status(500).json({ error: "Failed to fetch clients" });
  }
});

app.put("/api/clients", async (req, res) => {
  console.log("Received request to /api/clients");
  const { id, ...updateData } = req.body;
  try {
    const client = await prisma.client.update({
      where: { id },
      data: updateData,
    });
    res.json(client);
  } catch (error) {
    console.error("Error in /api/clients:", error);
    res.status(500).json({
      error:
        "Failed to update client info. Please note that clientId and email should be unique.",
    });
  }
});

app.post("/api/clients", async (req, res) => {
  console.log("Received request to /api/clients");
  const {
    email,
    fullName,
    firstName,
    birthYear,
    phone,
    address,
    clientDocument,
  } = req.body;
  const newClientId = await getLatestClientId();
  console.log("New client ID:", newClientId);
  const birthYearAndName = `${fullName} ${birthYear}`;
  console.log("Birth year and name:", birthYearAndName);
  try {
    const client = await prisma.client.create({
      data: {
        clientId: newClientId.toString(),
        email,
        fullName,
        firstName,
        birthYear,
        phone,
        address,
        clientDocument,
        birthYearAndName: birthYearAndName,
      },
    });
    res.json(client);
  } catch (error) {
    console.error("Error in /api/clients:", error);
    res.status(500).json({ error: "Failed to create client" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
