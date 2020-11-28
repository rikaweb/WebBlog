
import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      {/* <!--Posts Container--> */}
      <div className="flex flex-wrap justify-between pt-12 -mx-6">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
