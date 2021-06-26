<template>
  <v-card color="cardColor" class="pa-0">
    <v-card-title class="d-flex justify-space-between">
      <div>
        <p class="font-weight-bold text-h6 titleColor--text">{{ subject }}</p>
        <p class="mt-1 font-weight-light text-subtitle-1 textColor--text">
          Track Code: {{ trackCode }}
        </p>
      </div>
      <v-chip :color="statusChipColor" dark class="py-2 px-5">{{
        status
      }}</v-chip>
    </v-card-title>
    <v-divider class="my-2"></v-divider>
    <v-card-text class="d-flex align-center flex-wrap">
      <p class="my-2 mx-4 text-body-2 textColor--text">
        <v-icon color="textColor" size="14" class="mr-2"
          >mdi-calendar-check-outline</v-icon
        >
        {{ date }}
      </p>
      <p class="ma-2 text-body-2 textColor--text">
        <v-icon color="textColor" size="14" class="mr-2"
          >mdi-pencil-outline</v-icon
        >
        {{ writer }}
      </p>
    </v-card-text>
    <v-divider class="my-2"></v-divider>
    <v-card-text>
      <v-btn dark color="indigo" class="py-3 px-6" @click="toggleReplyForm"
        >Reply</v-btn
      >
      <transition name="fade">
        <v-form
          v-if="showReply"
          ref="replyForm"
          v-model="replyFormValid"
          class="mt-6"
          @submit.prevent="submitHandler"
        >
          <v-textarea
            v-model="replyMsg"
            outlined
            dense
            placeholder="enter message"
            :rules="[formRules.required]"
          ></v-textarea>
          <div :style="{ width: '25em' }" class="file-input">
            <v-file-input
              label="attach file"
              accept="image/*"
              dense
              outlined
              background-color="teal"
              color="white"
              chips
              show-size
              clearable
            ></v-file-input>
          </div>

          <v-btn
            type="submit"
            color="primary"
            dark
            :loading="isLoading"
            class="py-3 px-6"
            >Submit</v-btn
          >
        </v-form>
      </transition>
    </v-card-text>
    <v-card-text>
      <div
        v-for="(message, i) in messages"
        :key="message.id"
        :class="{ 'mt-8': i !== 0 }"
      >
        <h6
          class="pa-2 font-weight-medium white--text text-subtitle-1"
          :class="{
            orange: message.senderType === 'user',
            'cyan darken-2': message.senderType === 'admin',
          }"
        >
          {{ message.username }}
        </h6>
        <div
          class="pa-3"
          :class="{
            'border-dark': $vuetify.theme.dark,
            'border-light': !$vuetify.theme.dark,
          }"
        >
          <div>
            <p class="text-body-2 font-weight-light textColor--text">
              {{ message.msg }}
            </p>
            <a
              v-if="message.file"
              :href="message.file.link"
              target="_blank"
              class="
                d-flex
                align-center
                text-body-2
                mt-2
                font-weight-bold
                info--text
              "
            >
              <v-icon size="15" class="mr-2" color="info"
                >mdi-link-variant</v-icon
              >
              {{ message.file.name }}
            </a>
            <p class="mt-4 text-caption textColor--text">
              <v-icon size="15" class="mr-1">mdi-clock-outline</v-icon>
              {{ message.date }}
            </p>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'Tickets List',
          disabled: false,
          to: '/dashboard/tickets',
        },
      ],
      trackCode: '',
      title: '',
      subject: '',
      date: '',
      writer: '',
      status: '',
      showReply: false,
      messages: [],
      replyFormValid: true,
      replyMsg: '',
      isLoading: false,
    }
  },
  fetch() {
    this.trackCode = 100200
    this.subject = 'subject of ticket'
    this.date = new Date().toDateString()
    this.writer = 'writer name'
    this.status = 'not seen'
    this.messages = [
      {
        id: 1,
        senderType: 'admin',
        msg: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        username: 'admin#1',
        date: new Date().toDateString(),
        file: null,
      },
      {
        id: 2,
        senderType: 'user',
        msg: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        username: 'user#2',
        date: new Date().toDateString(),
        file: {
          name: 'filename.png',
          link: '',
        },
      },
    ]
  },
  computed: {
    statusChipColor() {
      if (this.status === 'seen')
        return this.$vuetify.theme.themes.light.success
      else if (this.status === 'not seen')
        return this.$vuetify.theme.themes.light.error
      return this.$vuetify.theme.themes.light.warning
    },
    formRules() {
      return {
        required: val => {
          if (!val || !val.trim().length) return 'field is required'
          return true
        },
      }
    },
  },
  methods: {
    toggleReplyForm() {
      this.showReply = !this.showReply
    },
    submitHandler() {
      this.$refs.replyForm.validate()
      if (this.replyFormValid) {
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
        }, 2000)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s linear;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
