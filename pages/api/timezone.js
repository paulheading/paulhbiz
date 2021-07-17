
const timezone = (req, res) => res.status(200).json({
  ready: true,
  time: '12:34',
  location: 'London'
});

export default timezone;