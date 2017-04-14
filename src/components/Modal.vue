<template>
    <modal v-model="show" @ok="eventOk">
        <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">
                {{title}}
            </h4>
        </div>
        <div slot="modal-body" class="modal-body">
            <form class="form">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" placeholder="Title" v-model="post.title">
                </div>
                <div class="form-group">
                    <label>Digest</label>
                    <input type="text" class="form-control" placeholder="Digest" v-model="post.digest">
                </div>
                <div class="form-group">
                    <label>Heading Image URL</label>
                    <input type="text" class="form-control" placeholder="Heading Image URL" v-model="post.headingImg">
                </div>
                <div class="form-group">
                    <label>Content</label>
                    <textarea class="form-control" rows="3" v-model="post.content"></textarea>
                </div>
                <div class="form-group">
                    <label>Published At</label>
                    <input type="date" class="form-control" v-bind:value="post.publishedAt.toISOString().substr(0,10)"
                           @blur="post.publishedAt = new Date(this.event.target.value)">
                </div>
                <div class="form-group">
                    <label>Published By</label>
                    <input type="text" class="form-control" placeholder="Published By" v-model="post.publishedBy">
                </div>
            </form>
        </div>
    </modal>
</template>

<script>
    import {modal} from 'vue-strap';

    export default {
        name: 'PostModal',
        components: {
            modal
        },
        props: {
            title: {
                required: true,
                type: String
            },
            index: {
                required: true,
                type: Number
            },
            post: {
                required: true,
                type: Object
            }
        },
        data: () => {
            return {
                show: false
            }
        },
        methods: {
            eventOk() {
                this.show = false;
                this.$emit('save', this.index, this.post);
            }
        },
    }
</script>