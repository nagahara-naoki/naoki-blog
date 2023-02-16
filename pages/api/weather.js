export default async function handler(req, res) {
  const response = await fetch("https://www.jma.go.jp/bosai/forecast/data/forecast/290000.json");
  const data = await response.json();
  res.status(200).json({ data });
}
