import { useEffect, useState } from "react";
import Loader from "./Loader";

const PageWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // ⏱️ adjust if needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return <div className="page-fade">{children}</div>;
};

export default PageWrapper;
