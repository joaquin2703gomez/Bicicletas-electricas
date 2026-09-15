body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #080808;
  color: #fff;
}

header {
  background: #111;
  padding: 20px 7%;
  border-bottom: 1px solid #292929;
}

.logo {
  color: #fff;
  font-size: 30px;
  font-weight: bold;
}

.logo span {
  color: #5b197d;
}

.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 7%;
  background: radial-gradient(circle at right, #3b1255, #080808 45%);
}

.hero h1 {
  font-size: 70px;
  margin: 0;
}

.hero h1 span {
  color: #681f91;
}

.hero p {
  color: #aaa;
  font-size: 20px;
}

.hero img {
  width: 50%;
  max-width: 600px;
  filter: drop-shadow(0 20px 30px #000);
}

.btn {
  display: inline-block;
  padding: 15px 30px;
  background: #50156d;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  transition: .3s;
}

.btn:hover {
  background: #7626a0;
  transform: scale(1.05);
}

.bikes {
  padding: 80px 7%;
  background: #111;
}

.bikes h2 {
  text-align: center;
  font-size: 45px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.card {
  background: #1b1b1f;
  border: 1px solid #303036;
  border-radius: 20px;
  overflow: hidden;
  transition: .3s;
}

.card:hover {
  transform: translateY(-8px);
  border-color: #68218c;
}

.card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.card-content {
  padding: 25px;
}

.card h3 {
  font-size: 25px;
}

.card p {
  color: #aaa;
}

.price {
  color: #8a32b5;
  font-size: 22px;
  font-weight: bold;
}

footer {
  text-align: center;
  padding: 30px;
  background: #050505;
  color: #888;
}

@media (max-width: 800px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero h1 {
    font-size: 50px;
  }

  .hero img {
    width: 90%;
  }

  .grid {
    grid-template-columns: 1fr;
  }
