const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  }
];

export default function(endpoint) {
  return new Promise((accept) => {
    setTimeout(() => {
      accept([...users]);
    }, 3000)
  })
}