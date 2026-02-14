export const checkBreach = async (searchTerm) => {
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}%20data%20breach&format=json&origin=*`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    return data.query.search
      .map((result) => ({
        Title: result.title,
        Description: result.snippet.replace(/<\/?[^>]+(>|$)/g, "") + "...",
        DataClasses: ["Public Record", "Security News"],
      }))
      .slice(0, 5);
  } catch (error) {
    console.error("Wikipedia API Error:", error);
    return [];
  }
};
