import { useState, useEffect } from "react";

export const useTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRows = async () => {
      try {
        const response = await fetch(
          "https://pavevue.loc/api/Properties/ajaxIndex.json",
          { credentials: "include" }
        );

        const data = await response.json();
        console.log("API response:", data);

        if (!response.ok || data.status !== "success") {
          throw new Error(data.message || "Unknown error");
        }

        setRows(data.data || []);
      } catch (err) {
        console.debug("[PV] fetchUser error:", err?.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRows();
  }, []);

  return { rows, loading, error };
};
