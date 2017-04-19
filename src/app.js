import './app.scss'

import Vue from 'vue';
import Post from './components/Post.vue';
import  PostModal  from './components/Modal.vue';


new Vue({
    el: '#root',
    data: {
        posts: [
            {
                title: 'Hello World',
                digest: 'Lorem ipsum Eu velit ad minim exercitation dolor occaecat ad aliquip ut pariatur eu ullamco esse magna proident veniam Ut minim anim aliquip nostrud fugiat.',
                headingImg: 'http://placehold.it/1100x600',
                content: 'Lorem ipsum Irure Excepteur nostrud cillum aliquip cupidatat dolore non cupidatat esse est sed nostrud ut culpa occaecat adipisicing amet id non aliqua veniam culpa dolore sunt ea esse.Lorem ipsum Irure Excepteur nostrud cillum aliquip cupidatat dolore non cupidatat esse est sed nostrud ut culpa occaecat adipisicing amet id non aliqua veniam culpa dolore sunt ea esse.Lorem ipsum Irure Excepteur nostrud cillum aliquip cupidatat dolore non cupidatat esse est sed nostrud ut culpa occaecat adipisicing amet id non aliqua veniam culpa dolore sunt ea esse.Lorem ipsum Irure Excepteur nostrud cillum aliquip cupidatat dolore non cupidatat esse est sed nostrud ut culpa occaecat adipisicing amet id non aliqua veniam culpa dolore sunt ea esse.',
                publishedAt: new Date(),
                publishedBy: 'John Joe',
            },
            {
                title: 'Hello World',
                digest: 'Lorem ipsum Eu velit ad minim exercitation dolor occaecat ad aliquip ut pariatur eu ullamco esse magna proident veniam Ut minim anim aliquip nostrud fugiat.',
                headingImg: 'http://placehold.it/1100x560',
                content: 'Lorem ipsum Irure Excepteur nostrud cillum aliquip cupidatat dolore non cupidatat esse est sed nostrud ut culpa occaecat adipisicing amet id non aliqua veniam culpa dolore sunt ea esse.Lorem ipsum Irure Excepteur nostrud cillum aliquip cupidatat dolore non cupidatat esse est sed nostrud ut culpa occaecat adipisicing amet id non aliqua veniam culpa dolore sunt ea esse.Lorem ipsum Irure Excepteur nostrud cillum aliquip cupidatat dolore non cupidatat esse est sed nostrud ut culpa occaecat adipisicing amet id non aliqua veniam culpa dolore sunt ea esse.Lorem ipsum Irure Excepteur nostrud cillum aliquip cupidatat dolore non cupidatat esse est sed nostrud ut culpa occaecat adipisicing amet id non aliqua veniam culpa dolore sunt ea esse.',
                publishedAt: new Date(),
                publishedBy: 'John Joe',
            }
        ],
        editedIndex: -1,
        editedPost : {
            title: '',
            digest: '',
            headingImg: 'http://placehold.it/1100x560',
            content: '',
            publishedAt: new Date(),
            publishedBy: '',
        },
        modalTitle : 'Add Post'
    },
    components: {
        Post,
        PostModal
    },
    methods: {
        eventRemove(index) {
            this.posts.splice(index, 1);
        },
        eventNew() {
            this.modalTitle = 'Add Post';
            this.editedIndex = -1;
            this.editedPost = {
                title: '',
                digest: '',
                headingImg: 'http://placehold.it/1100x560',
                content: '',
                publishedAt: new Date(),
                publishedBy: '',
            };
            this.$refs.modal.show = true;
        },
        eventEdit(index) {
            this.modalTitle = 'Add Post';
            this.editedIndex = index;
            this.editedPost = this.clone(this.posts[index]);
            this.$refs.modal.show = true;
        },
        eventSave(index, post) {
            if(index === -1) this.posts.push(post);
            else {
                for (let k in post) {
                    if (post.hasOwnProperty(k)) this.posts[index][k] = post[k];
                }
            }

        },
        /**
         * clone post object
         * @param original
         * @returns {{title: string, digest: string, headImg: string, content: string, publishedAt: Date, publishedBy: string}}
         */
        clone(original) {
            let clone = JSON.parse(JSON.stringify(original));
            clone.publishedAt = new Date(original.publishedAt);
            return clone;
        }
    }
});