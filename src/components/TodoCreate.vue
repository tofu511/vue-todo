<template>
  <modal ref="modal">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Title</label>
        <input
        v-model="form.title"
        class="form-input"
        type="text">
      </div>
      <div class="form-control">
        <label class="label">Description</label>
        <textarea
        v-model="form.description"
        class="form-input"
        cols="30"
        rows="10"></textarea>
      </div>
      <button
      @click="submitForm"
      type="button"
      class="app-button is-primary">Confirm</button>
    </form>
  </modal>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      form: {
        title: '',
        description: '',
      },
      forceClose: false,
    };
  },
  computed: {
    isFormValid() {
      return this.form.title && this.form.description;
    },
    modal() {
      return this.$refs.modal;
    },
  },
  methods: {
    submitForm() {
      if (this.isFormValid) {
        this.$emit('formSubmitted', { ...this.form });
        this.modal.close();
        this.resetForm();
      }
    },
    resetForm() {
      this.form.title = '';
      this.form.description = '';
    },
  },
};
</script>
