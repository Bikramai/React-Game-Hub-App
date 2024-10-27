import { useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const Like = () => {
  const [status, setStatus] = useState(false);

  if (status) return <IoIosHeart color="#ff6b81" size={40} />;
  return <IoIosHeartEmpty size={40} />;
};

export default Like;
