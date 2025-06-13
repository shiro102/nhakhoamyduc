import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";
import Loading from "../Loading";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" }),
});
const currentDateTime = new Date().toLocaleString();

const Login = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState("login");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://nhakhoamyduc-api.onrender.com/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (response.ok) {
        toast.success(<Translation>{(t) => t("loginSuccess")}</Translation>, {
          description: (
            <span style={{ color: "var(--muted-foreground)" }}>
              {currentDateTime}
            </span>
          ),
          style: {
            color: "#22c55e",
          },
        });
        navigate("/admin");
      } else {
        toast.error(
          <Translation>{(t) => t(result.error || "loginFailed")}</Translation>,
          {
            description: (
              <span style={{ color: "var(--muted-foreground)" }}>
                {currentDateTime}
              </span>
            ),
            style: {
              color: "#ef4444",
            },
          }
        );
      }
    } catch (error) {
      toast.error(<Translation>{(t) => t("loginError")}</Translation>, {
        description: (
          <span style={{ color: "var(--muted-foreground)" }}>
            {currentDateTime}
          </span>
        ),
        style: {
          color: "#ef4444",
        },
      });
    }
    setIsLoading(false);
  };

  const onSignup = async (data) => {
    try {
      const response = await fetch(
        "https://nhakhoamyduc-api.onrender.com/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (response.ok) {
        toast.success(
          <Translation>{(t) => t("registrationSuccess")}</Translation>,
          {
            description: (
              <span style={{ color: "var(--muted-foreground)" }}>
                {currentDateTime}
              </span>
            ),
          }
        );
        reset();
        setTab("login");
      } else {
        toast.error(
          <Translation>
            {(t) => t(result.error || "registrationFailed")}
          </Translation>,
          {
            description: (
              <span style={{ color: "var(--muted-foreground)" }}>
                {currentDateTime}
              </span>
            ),
          }
        );
      }
    } catch (error) {
      toast.error(<Translation>{(t) => t("registrationError")}</Translation>, {
        description: (
          <span style={{ color: "var(--muted-foreground)" }}>
            {currentDateTime}
          </span>
        ),
      });
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
      {isLoading && <Loading />}

      {/* Login Form */}
      <div className="flex flex-col items-center justify-center border border-gray-300 shadow-md rounded-xl w-full max-w-md px-8 py-10 gap-y-6 bg-white m-3">
        <img
          src="images/myduclogo.jpg"
          alt="Clinic Logo"
          className="w-24 h-24 object-contain mb-2"
        />
        <div className="flex w-full mb-4">
          <button
            className={`flex-1 py-2 rounded-t-md ${
              tab === "login"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => {
              setTab("login");
              setMessage("");
            }}
          >
            {t("login")}
          </button>
          <button
            className={`flex-1 py-2 rounded-t-md ${
              tab === "signup"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => {
              setTab("signup");
              setMessage("");
            }}
          >
            {t("signup")}
          </button>
        </div>
        {message && (
          <div className="text-center text-red-500 text-sm mb-2">{message}</div>
        )}
        {tab === "login" ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-y-5"
          >
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                {t("loginEmail")}
              </label>
              <input
                id="email"
                type="text"
                placeholder={t("enterEmail")}
                autoComplete="off"
                {...register("email")}
                className="border border-gray-300 bg-white text-gray-900 h-11 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                {t("password")}
              </label>
              <div className="relative">
                <input
                  id="password"
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder={t("enterPassword")}
                  className="border border-gray-300 bg-white text-gray-900 h-11 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <Eye
                  className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>

              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            <button
              className="h-11 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-md"
              type="submit"
            >
              {t("login")}
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleSubmit(onSignup)}
            className="flex flex-col w-full gap-y-5"
          >
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="signup-email"
                className="text-sm font-medium text-gray-700"
              >
                {t("loginEmail")}
              </label>
              <input
                id="signup-email"
                type="text"
                placeholder={t("enterEmail")}
                autoComplete="off"
                {...register("email")}
                className="border border-gray-300 bg-white text-gray-900 h-11 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="signup-password"
                className="text-sm font-medium text-gray-700"
              >
                {t("password")}
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder={t("enterPassword")}
                  className="border border-gray-300 bg-white text-gray-900 h-11 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <Eye
                  className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            <button
              className="h-11 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold rounded-md"
              type="submit"
            >
              {t("signup")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
