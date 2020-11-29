import PostPreview from "./postsPreview";


export default function MoreStoriesPosts({ posts }) {
  return (
    <section>
      {/* <!--Posts Container--> */}
      <div className="card-group">
        {posts.map((post) => (
          <PostPreview
            newKey={post.slug}
            newTitle={post.title}
            newCoverImage={post.coverImage.url}
            newDate={post.date}
            newName={post.author.name}
            newAuthorImage={post.author.picture.url}
            newSlug={post.slug}
            newExcerpt={post.excerpt}
        />
        ))}

      </div>
    </section>
  )
}
