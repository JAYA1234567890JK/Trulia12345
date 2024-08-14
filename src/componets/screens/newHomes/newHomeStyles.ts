export const newHomeStyles = {
  refContainer: {
    display: "flex",
    overflowX: "auto",
    scrollBehavior: "smooth",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
    gap: 2,
    p: 1,
    width: "100%",
  },
  cardContainer: {
    minWidth: 250,
    padding: "10px 0",
    display: "flex",
    flexDirection: "column",
  },
};
