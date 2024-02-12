export default function () {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://images.pexels.com/photos/17807506/pexels-photo-17807506/free-photo-of-two-beautiful-white-swans-swimming-in-the-lake-jovan-vasiljevic-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic. Almost every piece of writing
          you do that is longer than a few sentences should be organized into
          paragraphs.\
        </h2>
        <p className="info">
          <a className="author">Anchit Gedekar</a>
          <time>05-02-24</time>
        </p>
        <p className="summary">
          Paragraphs can contain many different kinds of information. A
          paragraph could contain a series of brief examples or a single long
          illustration of a general point.
        </p>
      </div>
    </div>
  );
}
