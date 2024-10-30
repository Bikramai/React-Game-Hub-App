import { useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  return <IoIosHeart color="#ff6b81" size={40} onClick={toggle} />;
  return <IoIosHeartEmpty size={40} onClick={toggle} />;
};

export default Like;
