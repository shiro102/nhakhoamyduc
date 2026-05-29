const { PrismaClient } = require("@prisma/client");
const XLSX = require("xlsx");
const path = require("path");

const prisma = new PrismaClient();

async function importUsers() {
  try {
    // Read the Excel file
    const workbook = XLSX.readFile(path.join(__dirname, "users.xls"));
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    console.log(`Found ${data.length} records to import`);

    // Process each row
    for (const row of data) {
      try {
        // Map Excel columns to User model fields
        const clientData = {
          clientId: String(row.clientId) || "",
          fullName: row.fullName || "",
          firstName: row.firstName || "",
          birthYear: parseInt(row.birthYear) || 0,
          birthYearAndName: row.birthYearAndName || "",
          email: row.email || null,
          age: row.age?.toString() || null,
          phone: row.phone?.toString() || null,
          address: row.address || null,
        };

        // Create user in database
        await prisma.client.create({
          data: clientData,
        });

        console.log(`Imported client: ${clientData.fullName}, ID: ${clientData.clientId}`);
      } catch (error) {
        console.error(`Error importing row:`, row);
        console.error(error);
      }
    }

    console.log("Import completed successfully");
  } catch (error) {
    console.error("Error during import:", error);
  } finally {
    await prisma.$disconnect();
  }
}

importUsers();
