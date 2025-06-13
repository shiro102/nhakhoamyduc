import { useTranslation } from "react-i18next";

const Loading = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col gap-y-4 justify-center items-center z-[99999]">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      <h1 className="text-2xl font-bold text-white">{t("loadingMessage")}</h1>
    </div>
  );
};

export default Loading;
