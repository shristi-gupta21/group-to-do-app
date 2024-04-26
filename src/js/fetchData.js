const fetchData = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    if (!res.ok) {
      throw new Error("failed to fetch todo");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
