import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { DarkModeContext } from "../context";
import OptionMenu from "./OptionMenu";
import { Divider } from "@mui/material";
import AvatarWithHeader from "./AvatarWithHeader";
import Profile from "../assets/images/profile.png";
import BotAvatarLight from "../assets/images/BotAvatarLight.png";
import BotAvatarDark from "../assets/images/BotAvatarDark.png";



const chatDetails = [
  {
    id: 1,
    title: "Analyse my Investment and show my investment profile",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. Integer lorem tortor at lectus. Mollis pulvinar ultricies tellus nulla libero sed. Ultrices leo scelerisque tellus vel nunc tristique sit fermentum. Gravida bibendum velit curabitur luctus. Luctus sollicitudin viverra ultricies dictum urna accumsan ornare viverra.",
  },
  {
    id: 2,
    title:
      "Odio sit at a dictum vestibulum et vitae. Interdum enim arcu tincidunt iaculis egestas at. ",
    subtitle:
      "Consequat pulvinar maecenas pretium bibendum lorem posuere nibh pellentesque. Ac id dignissim non diam viverra cursus ut vitae. Turpis ullamcorper viverra ut fames diam id. Id semper sit pulvinar mauris nunc tincidunt commodo. Donec laoreet urna ultricies ut. Vitae vitae sed bibendum risus.",
  },
  {
    id: 3,
    title:
      "Tempor amet egestas urna donec. Eget vitae egestas sem mi auctor. Aliquet velit ornare feugiat pulvinar quis amet adipiscing leo. ",
    subtitle:
      "Urna sagittis enim ipsum ut. Aliquet gravida id in aliquam varius a. Odio sit at a dictum vestibulum et vitae. Interdum enim arcu tincidunt iaculis egestas at. Viverra ullamcorper fringilla pulvinar mauris ornare pellentesque sodales faucibus. Interdum nibh tincidunt tellus sit ridiculus. Quis nisl augue urna sapien nunc morbi lorem elit placerat. Risus a molestie erat mauris tincidunt lacus volutpat. Ipsum interdum consequat pulvinar eleifend felis pellentesque turpis vulputate. Nec odio ac non gravida odio a aliquet nibh. Lectus nunc lorem id ut.",
  },
  {
    id: 4,
    title: "Analyse my Investment and show my investment profile",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur. Integer lorem tortor at lectus. Mollis pulvinar ultricies tellus nulla libero sed. Ultrices leo scelerisque tellus vel nunc tristique sit fermentum. Gravida bibendum velit curabitur luctus. Luctus sollicitudin viverra ultricies dictum urna accumsan ornare viverra.",
  },
];

export default function PopupComponent({
  open,
  setOpen,
  handleClose,
  handleClickOpen,
}) {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialog-paper": {
      borderRadius: "24px",
      backgroundColor: darkMode ? "#091B25" : "#fff"
    },
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth="lg"
        maxWidth="lg"
      >
        <div className="py-4 px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center  gap-2">
              <h1
                className={`text-[16px] md:text-[18px] lg:text-[24px] ${
                  darkMode ? "text-[#3F9CFF]" : "text-[#968864]"
                }`}
              >
                Analyse my Investment and show my investment profile
              </h1>

              <OptionMenu />
            </div>
            <CloseIcon onClick={handleClose} sx={{ cursor: "pointer", color:darkMode?"#fff" : "#1E1E1E" }} />
          </div>
          <div className="pb-4">
            <p className={`${darkMode ? "text-[#fff]" : "text-[#787777]"}`}>13March 2024,11:00AM</p>
          </div>
          <Divider />
            <div className="py-4" >
          {chatDetails.map((item) => (

                <div key={item.id}>
                <div className="py-2">
                <AvatarWithHeader
                  avatar={Profile}
                  title={item.title}
                  botAvatar={false}
                  optionMenu={false}
                />
              </div>
              <div className="py-2 px-2.5">
                <AvatarWithHeader
                  avatar={darkMode ? BotAvatarDark : BotAvatarLight}
                  subtitle={item.subtitle}
                  botAvatar={true}
                  optionMenu={false}
                />
              </div>
                </div>
              ))}
            </div>
         
        </div>
      </BootstrapDialog>
    </React.Fragment>
  );
}
