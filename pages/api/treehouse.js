
const treehouse = (req, res) => res.status(200).json({
  ready: true,
  badges: [],
  points: {
    "JavaScript": 9652,
    "CSS": 1159,
    "Development Tools": 1024,
    "Databases": 864,
    "HTML": 493,
    "Computer Science": 292,
    "PHP": 165,
    "Design": 148,
    "Business": 112,
  },
  profile_name: "paulheading",
  profile_url: "https://teamtreehouse.com/paulheading"
});

export default treehouse;