const express = require('express');
const app = express();
const users = [
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Jane Smith' },
];

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Error handling for invalid userId
  if (!userId || isNaN(parseInt(userId))) {
    return res.status(400).json({ message: 'Invalid user ID' });
  }
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// ... other routes ...

app.listen(3000, () => console.log('Server is listening on port 3000'));