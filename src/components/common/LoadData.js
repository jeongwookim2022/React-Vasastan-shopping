function LoadData(url, setState, setLoading) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setTimeout(() => {
        setLoading(false);
        setState([...data]);
      }, 500);
    });
}
export default LoadData;
