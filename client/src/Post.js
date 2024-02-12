export default function Post({ title, summary, cover, content, createdAt }) {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://images.pexels.com/photos/17807506/pexels-photo-17807506/free-photo-of-two-beautiful-white-swans-swimming-in-the-lake-jovan-vasiljevic-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a className="author">Anchit Gedekar</a>
          <time>{createdAt}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
