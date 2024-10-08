import React from 'react'
import { Smartphone, Star, Users, Brain, AppStore, PlayStore } from 'lucide-react'

const features = [
  { icon: <Users className="w-6 h-6" />, title: "Multiplayer", description: "Play with friends or join random games" },
  { icon: <Brain className="w-6 h-6" />, title: "Diverse Categories", description: "Test your knowledge across various topics" },
  { icon: <Star className="w-6 h-6" />, title: "Leaderboards", description: "Compete for the top spot globally or locally" },
]

const screenshots = [
  { url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", alt: "Trivia game screen" },
  { url: "https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", alt: "Leaderboard screen" },
  { url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", alt: "Category selection screen" },
]

const testimonials = [
  { name: "John Doe", text: "This app has made our game nights so much more fun! Highly recommended!" },
  { name: "Jane Smith", text: "I've learned so much while having a blast. Great for all ages!" },
]

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <Smartphone className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">Trivia Nights App</h1>
          <p className="text-xl">Test your knowledge, challenge friends, have fun!</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Screenshots</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {screenshots.map((screenshot, index) => (
              <img key={index} src={screenshot.url} alt={screenshot.alt} className="w-64 h-auto rounded-lg shadow-md" />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Download Now</h2>
          {/* <div className="flex justify-center gap-4">
            <a href="#" className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
              <AppStore className="w-6 h-6 mr-2" />
              App Store
            </a>
            <a href="#" className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center">
              <PlayStore className="w-6 h-6 mr-2" />
              Play Store
            </a>
          </div> */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2023 Trivia Nights App. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App