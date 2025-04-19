
import { Award, Star, Trophy, Users, Zap } from "lucide-react";

// Example achievements data
const achievements = [
  {
    id: 1,
    title: "Top Content Creator",
    description: "Recognized as a top content creator in the digital marketing space",
    icon: <Star className="text-yellow-500" size={24} />,
  },
  {
    id: 2,
    title: "10k+ Followers",
    description: "Built an engaged community of over 10,000 followers across platforms",
    icon: <Users className="text-blue-500" size={24} />,
  },
  {
    id: 3,
    title: "Industry Award",
    description: "Won the prestigious Industry Excellence Award for innovative campaigns",
    icon: <Trophy className="text-amber-500" size={24} />,
  },
  {
    id: 4,
    title: "Featured Expert",
    description: "Featured as an expert speaker at multiple industry conferences",
    icon: <Award className="text-purple-500" size={24} />,
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section scroll-mt bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            Milestones and recognitions I've earned throughout my journey.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start">
                <div className="p-3 bg-gray-50 rounded-full mr-4">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
