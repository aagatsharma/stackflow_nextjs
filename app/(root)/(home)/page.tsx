import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import { LocalSearchbar } from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to cook a perfect steak?",
    tags: [
      { _id: "tag1", name: "Cooking" },
      { _id: "tag2", name: "Food" },
    ],
    author: {
      _id: "author1",
      name: "Chef Gordon Ramsay",
      picture: "gordon-ramsay.jpg",
    },
    upvotes: 1278,
    views: 23657,
    answers: [
      { answerId: "answer1", text: "Season the steak with salt and pepper..." },
      {
        answerId: "answer2",
        text: "Preheat a cast-iron skillet over high heat...",
      },
    ],
    createdAt: new Date("2023-11-07T18:45:00"),
  },
  {
    _id: "2",
    title: "Best practices for web development in 2023",
    tags: [
      { _id: "tag3", name: "Web Development" },
      { _id: "tag4", name: "Programming" },
    ],
    author: {
      _id: "author2",
      name: "Jane Developer",
      picture: "jane-dev.jpg",
    },
    upvotes: 2011,
    views: 12345,
    answers: [
      {
        answerId: "answer3",
        text: "Use TypeScript for stronger type checking...",
      },
      {
        answerId: "answer4",
        text: "Optimize images and assets for faster load times...",
      },
    ],
    createdAt: new Date("2023-11-08T22:15:00"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className=" h1-bold text-dark100_light900">All Questions</h1>
        <Link
          href={"/ask-question"}
          className=" flex justify-end max-sm:w-full "
        >
          <Button className=" primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          moreclassName="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          moreClassName="min-h-[56px] sm:min-w-[170px]"
          containerClassName="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! Ask a Question and kickstart the discussion. Our query could be the next big thing others learn from. Get involved."
            link="/ask-question"
            linkTitle="Ask a qQestion"
          />
        )}
      </div>
    </>
  );
}
