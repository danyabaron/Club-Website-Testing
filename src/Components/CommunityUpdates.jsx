import alex from "../assets/alex.png";
import hacking from "../assets/hackingpost.png";
import duck from "../assets/duck.png";

const communityFeatured = [
  {
    id: 1,
    label: "COMMUNITY UPDATE",
    title: "MISSING CLUB MEMBER",
    excerpt:
      "One of our club members, Alex Valegro, has gone missing from her college campus, and the situation has deeply affected everyone in our community. Her close friends have taken immediate action by creating a dedicated website, where you can find her recent photo, the details of her last known whereabouts, and statements from witnesses. According to the site, Alex was last seen near the campus art center wearing a distinctive red jacket and carrying her favorite backpack. Her disappearance has sparked widespread concern, and everyone is urged to check the website for updates and clues. If you have any information that could help locate Alex, please contact her friends through the website right away. Alex has always been an active and vibrant member of our club, and we all hope for her safe return soon.",
    imageSrc: alex,
    link: "https://72211713181284141.github.io/findalex/",
  },
  {
    id: 2,
    label: "HACKATHON NEWS",
    title: "Club Member Wins 32nd Place at Local Hackathon!",
    excerpt:
      "James Carter stunned (and deeply confused) the judges with his revolutionary CyberToaster, an AI-powered toaster that predicts the future based on how your bread is toasted. Using a sophisticated neural network trained on burn patterns, crumb density, and the spiritual essence of wheat, CyberToaster claims to analyze the golden-brown hues of your breakfast and provide eerily specific life predictions. During the demo, CyberToaster correctly predicted that one judge would drop their phone within the next 10 minutes (which actually happened), leading to a mix of awe and existential dread. However, it also claimed that another judge was destined to ‘become the Supreme Overlord of an underground mole society,’ which cast some doubt on its accuracy. When asked what inspired him, James simply replied: 'I wanted to harness the power of AI for something humanity actually needs... and also I was hungry.'Despite its questionable usefulness, CyberToaster took home the win for 'Most Unnecessarily Advanced Use of Technology' and has since been banned from three different kitchens due to 'inciting paranoia among breakfast enthusiasts.'",
    imageSrc: hacking,
    link: "",
  },
  {
    id: 3,
    label: "WORKSHOPS",
    title: "Hackers vs. Quackers",
    excerpt:
      "Last week, our club hosted the highly anticipated 'Hackers vs.Quackers: Cybersecurity and the Rise of Rubber Duck USBs' workshop, where members learned about the dangers of malicious USB devices disguised as harmless gadgets. Participants got hands-on experience testing out simulated attacks using real rubber ducky USBs—don’t worry, no actual hacking occurred (we promise)! The highlight of the event was the 'Duck or Danger?' challenge, where attendees had to determine whether a USB was safe or secretly programmed to wreak havoc. By the end of the night, everyone walked away with better awareness of social engineering tactics, plus some stylish 'I Don’t Trust USBs' stickers.",
    imageSrc: duck,
    link: "",
  },
];

const CommunityFeatured = () => {
  return (
    <section className="py-12 bg-black text-bright-gold">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          <span className="bg-bright-gold text-black px-4 py-1  shadow-md">
            Monthly Community Highlights
          </span>
        </h2>
        <div className="space-y-8">
          {communityFeatured.map((post) => (
            <div
              key={post.id}
              className="flex flex-col sm:flex-row items-center bg-black border border-metal-gold 
              drop-shadow-[0_0_10px_rgba(255,215,0,0.7)] shadow-lg rounded-lg p-4"
            >
              {/* Image */}
              <div className="sm:w-1/4 mb-4 sm:mb-0 sm:mr-6">
                <img
                  src={post.imageSrc}
                  alt={post.title}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
              {/* Text Content */}
              <div className="sm:w-3/4">
                <span className=" text-sm font-semibold bg-bright-gold text-black px-2 py-1 shadow-md uppercase tracking-wide mb-2 inline-block">
                  {post.label}
                </span>
                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="inline-block bg-metal-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default CommunityFeatured;
