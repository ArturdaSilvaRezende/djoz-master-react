import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  containerId: string;
}

const Portal: React.FC<PortalProps> = ({ children, containerId }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const existingContainer = document.getElementById(containerId);
    const newContainer = existingContainer || document.createElement("div");
    newContainer.setAttribute("id", containerId);

    if (!existingContainer) {
      document.body.appendChild(newContainer);
    }

    setContainer(newContainer);

    return () => {
      if (!existingContainer && newContainer.parentNode) {
        newContainer.parentNode.removeChild(newContainer);
      }
    };
  }, [containerId]);

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(children, container);
};

export default Portal;
