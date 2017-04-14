<template>
    <article class="post">
        <div class="post-header">
            <h2 class="post-title">
                <a rel="bookmark">
                    {{ post.title }}
                </a>
            </h2>
        </div>
        <div class="post-meta">
            <a><span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                <time class="entry-date published updated" :datetime="post.publishedAt">
                    {{ post.publishedAt.toLocaleDateString() }}
                </time>
            </a>
            <a><span class="glyphicon glyphicon-user" aria-hidden="true"></span> {{ post.publishedBy }}</a>
        </div>
        <div class="post-summary">
            <p class="text-justify">{{ post.digest }}</p>
        </div>
        <div class="post-image">
            <img class="img" :src="post.headingImg" alt=""/>
        </div>
        <div class="post-content">
            <p class="text-justify">{{ post.content }}</p>
        </div>
        <footer class="post-footer">
            <a class="btn btn-primary" @click="editPost"><i class="fa fa-pencil"></i> Edit</a>
            <a class="btn btn-danger" @click="deletePost"><i class="fa fa-pencil"></i> Delete</a>
        </footer>
    </article>
</template>
<script>
    export default {
        name: 'Post',
        props: ['index', 'post'],
        methods: {
            editPost() {
                this.$emit('edit', this.index);
            },
            deletePost() {
                this.$emit('remove', this.index);
            }
        }
    }
</script>
