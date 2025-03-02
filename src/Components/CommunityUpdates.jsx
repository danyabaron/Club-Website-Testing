

const communityPosts = [
  {
    id: 1,
    avatar: "avatar1.jpg",
    name: "Alice Johnson",
    timestamp: "Mar 1, 2025",
    content:
      "I attended a cybersecurity workshop last weekend and learned so much! Looking forward to the next event.",
  },
  {
    id: 2,
    avatar: "avatar2.jpg",
    name: "Bob Smith",
    timestamp: "Feb 28, 2025",
    content:
      "Our team is gearing up for the upcoming hackathon. It's going to be an exciting challenge—stay tuned!",
  },
  {
    id: 3,
    avatar: "avatar3.jpg",
    name: "Charlie Davis",
    timestamp: "Feb 27, 2025",
    content:
      "There's a community meetup next Friday at the campus library. Let's network and share insights!",
  },
];

const CommunityUpdates = () => {
  return (
    <section className="py-12 bg-black text-bright-gold">
      <div className="max-w-6xl mx-auto mt-12 px-4">
        <h3 className="text-3xl font-bold text-center mb-8 drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
          Community Updates
        </h3>
        <div className="space-y-6">
          {communityPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-900 border border-metal-gold rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={post.avatar}
                  alt={`${post.name} avatar`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold">{post.name}</h4>
                    <span className="text-sm text-gray-400">
                      {post.timestamp}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-300">{post.content}</p>
                  <a
                    href={`/community/${post.id}`}
                    className="inline-block mt-4 bg-metal-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityUpdates;
