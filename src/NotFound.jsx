import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/Home");
    }, 5000);

    // Cleanup function to clear the timeout if the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3 style={{ color: "green" }}>404 Page Not Found</h3>
      <img
        style={{ background: "blue", width:400,height:400}}
        src="https://th.bing.com/th/id/OIP.3_D6Cl2xR5Fc202Yh4k5FQHaE9?w=255&h=180&c=7&r=0&o=5&pid=1.7"
        alt="404 Not Found"
      />
    </div>
  );
}

export default NotFound;
