const getInitialData = () => [
  {
    id: 1,
    title: "Elixir of Life",
    body: "Created by the Philosopher’s Stone, this potion grants immortality and extends the drinker’s life indefinitely. Nicolas Flamel, the famed alchemist, used it for centuries.",
    createdAt: "2024-06-22T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: "Polyjuice Potion",
    body: "Allows the drinker to assume the appearance of someone else for an hour. The potion requires a piece of the person being transformed into, such as a hair.",
    createdAt: "2024-06-28T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: "Amortentia",
    body: "The most potent love potion in existence, causing the drinker to become infatuated with the person who gives it to them. It produces a distinct, spiraling steam.",
    createdAt: "2024-07-02T04:27:34.572Z",
    archived: false,
  },
  {
    id: 4,
    title: "Draught of Living Death",
    body: "A powerful sleeping potion that causes the drinker to fall into a deathlike slumber. It is extremely difficult to brew and can be fatal if overdosed.",
    createdAt: "2024-07-15T04:27:34.572Z",
    archived: false,
  },
  {
    id: 5,
    title: "Felix Felicis",
    body: "Known as 'Liquid Luck', this potion grants the drinker extraordinary luck for a period of time, making everything they attempt succeed. It must be used sparingly to avoid disastrous consequences.",
    createdAt: "2024-07-25T04:27:34.572Z",
    archived: false,
  },
  {
    id: 6,
    title: "Veritaserum",
    body: "A powerful truth serum that forces the drinker to reveal the truth. It’s highly effective, though not infallible, and can be dangerous if used improperly.",
    createdAt: "2024-07-29T04:27:34.572Z",
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };
