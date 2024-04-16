import React, { useContext } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { DarkModeContext } from "../context";
import DrawerComponent from "../components/Drawer";
import MobileDrawer from "../components/MobileDrawer";
import Header from "../components/Header";
import SettingsElements from "../components/SettingsElements";
import PromptBox from "../components/PromptBox";

const Settings = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const settingsData = [
    {
        id:1,
        title:"# Application Level Config",
        content:[
            {
                id: 1,
                subtitle: "UseCaseConfig",
                value: "",
              },
              {
                id: 2,
                subtitle: "app_name",
                value: "ESG Bot",
              },
              {
                id: 3,
                subtitle: "use_case",
                value: "ESGMetric_CDPQ",
              },
              {
                id: 4,
                subtitle: "audit_database",
                value: "temenos_bot",
              },
              {
                id: 5,
                subtitle: "audit_table",
                value: "temenos_bot_audit",
              },
        ]
    },
    {
        id:2,
        title:"# Configure the prompt for response synthesis",
        content:[
            {
                id: 1,
                subtitle: "PromptHelper",
                value: "",
              },
              {
                id: 2,
                subtitle: "context_window",
                value: 4096,
              },
              {
                id: 3,
                subtitle: "chunk_overlap_ratio",
                value: 0.1,
              },
              {
                id: 4,
                subtitle: "chunk_size_limit",
                value: null,
              },
        ]
    },
    {
        id:3,
        title:"# Configure the Large Language Model Api calls",
        content:[
            {
                id: 1,
                subtitle: "LLMConfig",
                value: "",
              },
              {
                id: 2,
                subtitle: "temperature",
                value: 0,
              },
              {
                id: 3,
                subtitle: "model",
                value: "text-davinci-003",
              },
              {
                id: 4,
                subtitle: "max_tokens",
                value: 400,
              },
        ]
    },
    {
        id:4,
        title:"# Specify the SentenceTransformer model for semantic clustering of responses",
        content:[
            {
                id: 1,
                subtitle: "ClusteringConfig",
                value: "",
              },
              {
                id: 2,
                subtitle: "SentenceTransformerModel",
                value: "all-mpnet-base-v2",
              },
              
        ]
    },
    {
        id:5,
        title:"# Configure how the pdf file texts should be chunked into Node texts",
        content:[
            {
                id: 1,
                subtitle: "SimpleNodeParser",
                value: "",
              },
              {
                id: 2,
                subtitle: "chunk_size",
                value: 1024,
              },
              {
                id: 3,
                subtitle: "chunk_overlap",
                value: 30,
              },
              
        ]
    },
    {
        id:6,
        title:"# Configure the Large Language Model Api calls",
        content:[
            {
                id: 1,
                subtitle: "LLMConfig",
                value: "",
              },
              {
                id: 2,
                subtitle: "temperature",
                value: 0,
              },
              {
                id: 3,
                subtitle: "model",
                value: "text-davinci-003",
              },
              {
                id: 4,
                subtitle: "max_tokens",
                value: 400,
              },
        ]
    },
    {
        id:7,
        title:"# Database Config",
        content:[
            {
                id: 1,
                subtitle: "VectorDatabaseConfig",
                value: "",
              },
              {
                id: 2,
                subtitle: "EMBEDDING_MODEL",
                value: "all-MiniLM-L6-v2",
              },
              
        ]
    },
    {
        id:8,
        title:"# Specify how many contexts to retrieve in the retrieval step",
        content:[
            {
                id: 1,
                subtitle: "QueryEngineConfig",
                value: "",
              },
              {
                id: 2,
                subtitle: "similarity_top_k",
                value: 3,
              },
              
        ]
    },
    {
        id:9,
        title:"# EMBEDDING_MODEL: opanai",
        content:[
            {
                id: 1,
                subtitle: "MILVUS_HOST",
                value: "localhost",
              },
              {
                id: 2,
                subtitle: "MILVUS_PORT",
                value: "19530",
              },
              
        ]
    }
  ]

  return (
    <div
      className={`flex ${darkMode ? "dark-background" : "light-background"}`}
    >
      <DrawerComponent />
      <MobileDrawer />
      <div
        className={`py-2 mb-32 px-1 flex flex-col w-full h-[100vh]  overflow-y-scroll relative md:py-4 md:px-6 overflow-hidden max-w-auto  ${
          darkMode ? "dark-background" : "light-background"
        }`}
      >
        <Header />
        <div className="py-8 px-8">
          <div className="flex gap-2 items-center">
            <SettingsOutlinedIcon
              sx={{
                width: "30px",
                height: "30px",
                color: darkMode ? "#3F9CFF" : "#968864",
              }}
            />
            <h1
              className={`text-[24px] font-bold ${
                darkMode ? "text-[#3F9CFF]" : "text-[#968864]"
              }`}
            >
              Settings
            </h1>
          </div>
          <div className=" md:px-2 lg:px-10 flex flex-col md:flex-row justify-between w-full flex-wrap ">
            {settingsData.map((itemList) =>(
                <SettingsElements key={itemList.id}
              title={itemList.title}
              content={itemList.content}
            />
            ))}
            
            
          </div>
        </div>
        <PromptBox />
      </div>
    </div>
  );
};

export default Settings;
