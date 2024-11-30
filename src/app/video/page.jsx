const page = () => {
  const videos = [
    {
      title: "বায়ো স্প্রে প্লাস কি কি রোগের জন্য কাজ করে।",
      src: "https://www.youtube.com/embed/oSiZp_2YiUQ",
    },
    {
      title: "বায়ো স্প্রে প্লাস কোন কোন রোগের জন্য কাজ করে।",
      src: "https://www.youtube.com/embed/ovmdHhi1dMA",
    },
    {
      title: "ঘন ঘন অজ্ঞান হওয়া থেকে সুস্থতায় বায়ো স্প্রে প্লাস।",
      src: "https://www.youtube.com/embed/qXQ5vB6NNOc",
    },
    {
      title: "পাইলস থেকে সুস্থতায় বায়ো স্প্রে প্লাস।",
      src: "https://www.youtube.com/embed/O3uaODiY4RQ",
    },
    {
      title: "বিকলাঙ্গতা থেকে সুস্থতায় বায়ো স্প্রে প্লাস।",
      src: "https://www.youtube.com/embed/_TGY9VF71Eo",
    },
    {
      title: "সোরিয়াসিস থেকে সুস্থতায় বায়ো স্প্রে প্লাস।",
      src: "https://www.youtube.com/embed/CuDmK53PA6c",
    },
    {
      title: "ডায়াবেটিকস, হাই-প্রেশার থেকে মুক্তি।",
      src: "https://www.youtube.com/embed/S8km-I0a384",
    },
    {
      title: "হাড়ের ক্ষয় ও ব্যাথা থেকে মুক্তি (সেনাবাহিনী)",
      src: "https://www.youtube.com/embed/sOkl6M3KqOs",
    },
    {
      title: "কিডনী রোগ এবং ডায়ালাইসিস থেকে মুক্তি",
      src: "https://www.youtube.com/embed/TCMHRDizuLc",
    },
    {
      title: "প্যারালাইসিস ও স্ট্রোক থেকে সুস্থ",
      src: "https://www.youtube.com/embed/aDk25jordMs",
    },
    {
      title: "বায়ো স্প্রে প্লাস নিয়ে ডাক্তার এর মতামত শুনুন।",
      src: "https://www.youtube.com/embed/4qpb5ngU-rg",
    },
    {
      title: "যেকোনো টিউমার সুস্থ বিনা অস্ত্রোপচারে।",
      src: "https://www.youtube.com/embed/zntPEC2AbUs",
    },
    {
      title: "অজানা রোগ নিয়ে মৃত্যুর কাছ থেকে ফিরে সুস্থ",
      src: "https://www.youtube.com/embed/Qilp_CPalCI",
    },
    {
      title: "খাদ্যনালীর সমস্যা এবং স্ট্রোক এর ঝুকি কমান",
      src: "https://www.youtube.com/embed/a5raNuII1gc",
    },
    {
      title: "২২ বছর পর সন্তান লাভ বায়ো স্প্রে প্লাস ব্যবহারে",
      src: "https://www.youtube.com/embed/ml8xLppqeiY",
    },
    {
      title: "জরায়ু টিউমার থেকে সম্পূর্ণ সুস্থ",
      src: "https://www.youtube.com/embed/0iAQjsQrt6o",
    },
    {
      title: "টঙ্গী BTCL এর কেন্দ্রীয় জামে মসজিদের ঈমাম",
      src: "https://www.youtube.com/embed/IuM9TA9nBkg",
    },
    {
      title: "বায়ো স্প্রে ব্যবহার করুন ডায়াবেটিকস হতে সুস্থ থাকুন",
      src: "https://www.youtube.com/embed/mXbyvmZwbdc",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">ভিডিও</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="firstvideo bg-white rounded-lg shadow-md p-4"
          >
            <h4 className="font-semibold text-lg mb-2">{video.title}</h4>
            <iframe
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-56 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
