const eventSource = new EventSource('http://localhost:3000');

eventSource.addEventListener('message', ({ data }) => {
  const { message } = JSON.parse(data);

  const textNode = document.createTextNode(message);
  const h1 = document.createElement('h1');
  h1.appendChild(textNode);

  document.getElementById('root').append(h1);
});
