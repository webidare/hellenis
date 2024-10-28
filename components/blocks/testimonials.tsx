import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Small Business Owner",
    content: "This platform has revolutionized how I manage my business. The efficiency gains are remarkable!",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5
  },
  {
    name: "Sarah Lee",
    role: "Freelance Designer",
    content: "The user interface is intuitive, and the customer support is top-notch. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    content: "This tool has been a game-changer for our startup. It's helped us streamline operations significantly.",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "E-commerce Manager",
    content: "The integration capabilities are fantastic. It works seamlessly with our existing systems.",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 5
  },
  {
    name: "David Patel",
    role: "Marketing Consultant",
    content: "I've tried many platforms, but this one stands out for its comprehensive features and ease of use.",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

export const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white dark:bg-gray-900">
              <CardContent className="p-6">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                  "{testimonial.content}"
                </blockquote>
                <div className="mt-4 flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
