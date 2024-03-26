<template>
  <div :style="{backgroundColor: '#FFEE58'}">
    <div class="ma-2">
      <v-row>
        <v-col cols="1">

        </v-col>
        <v-col cols="2">
          <v-btn class="ma-0 pa-0" width="100%" height="100%">個人頭像</v-btn>
        </v-col>
        <v-col cols="6">

        </v-col>
        <v-col cols="3" align="end">
          <v-row>
            <v-col cols="5">
              <v-btn class="ma-0 pa-0" width="100%" height="100%">石頭</v-btn>
            </v-col>
            <v-col cols="7">
              <v-btn class="ma-0 pa-0" width="100%" height="100%">體力</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="1">

        </v-col>
        <v-col cols="2">
          <v-btn class="ma-0 pa-0" width="100%" height="100%">合約</v-btn>
        </v-col>
        <v-col cols="6">
          <v-row>
            <v-col>
              <div>
                <v-calendar
                  class="ma-0 pa-0"
                  :attributes="attrs"
                >

                </v-calendar>
              </div>
            </v-col>
            <v-col>
              <div class="text-h6">忽略的事件：</div>
              <div v-for="(item, index) in ignoreList" :key="index">
                {{ item }}
              </div>
            </v-col>
          </v-row>


        </v-col>
        <v-col cols="3">
          <v-row>
            <v-col cols="4">

            </v-col>
            <v-col cols="2">
              <v-btn icon class="ma-0 pa-0" width="100%" height="100%">活動</v-btn>
            </v-col>
            <v-col cols="2">
              <v-btn icon class="ma-0 pa-0" width="100%" height="100%">福利</v-btn>
            </v-col>
            <v-col cols="2">
              <v-btn icon class="ma-0 pa-0" width="100%" height="100%">雜貨鋪</v-btn>
            </v-col>
            <v-col cols="2">
              <v-btn icon class="ma-0 pa-0" width="100%" height="100%">商城</v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="2">

            </v-col>
            <v-col cols="3">
              <v-btn class="ma-0 pa-0" width="100%" height="100%">餐廳</v-btn>
            </v-col>
            <v-col cols="7">
              <v-btn class="ma-0 pa-0" width="100%" height="100%">戰鬥</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2">
              <v-btn class="ma-0 pa-0" width="100%" height="100%">時裝</v-btn>
            </v-col>
            <v-col cols="3">
              <v-btn class="ma-0 pa-0" width="100%" height="100%">召喚</v-btn>
            </v-col>
            <v-col cols="7">
              <v-row>
                <v-col>
                  <v-btn class="ma-0 pa-0" width="100%" height="100%">戰鬥員</v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-btn class="ma-0 pa-0" width="100%" height="100%">貓球</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="1">

            </v-col>
            <v-col cols="3">
              <v-btn class="ma-0 pa-0" width="100%" height="100%">任務</v-btn>
            </v-col>
            <v-col cols="8">
              <v-btn class="ma-0 pa-0" width="100%" height="100%">主線故事</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import events from '@/common/event.js';
  const { eventList, markStyle, markDate, eventClassification } = events;
  const attrs = ref([]);
  const ignoreList = ref([]);

  onMounted(() => {
    attrs.value = Object.values(eventList).reduce((sum, cur) => [...sum, ...cur], []);
    attrs.value = attrs.value.sort((a, b) => {
      return (b.type - a.type);
    })

    ignoreList.value = [];
    attrs.value = attrs.value.reduce((sum, event, index) => {
      switch (event.type) {
        case eventClassification.ignore:
          ignoreList.value.push(event.name);
          return sum;
        case eventClassification.longTermEvent:
          return [
            ...sum,
            {
              key: index*2,
              highlight: {
                color: 'red'
              },
              dates: [new Date(event.period.start)],
              popover: {
                label: `${event.name} - 開始`,
                visibility: 'hover',
              }
            },
            {
              key: index*2+1,
              highlight: {
                color: 'red',
                fillMode: 'outline',
              },
              dates: [new Date(event.period.end)],
              popover: {
                label: `${event.name} - 結束`,
                visibility: 'hover',
              }
            },
          ]
        case eventClassification.specialSummon:
          return [
            ...sum,
            {
              key: index*2,
              dot: true,
              dates: [new Date(event.period.start)],
              popover: {
                label: `${event.name} - 開始`,
                visibility: 'hover',
              }
            },
          ]

        case eventClassification.shortTermEvent:
          return [
            ...sum,
            {
              key: index*2,
              highlight: {
                color: 'yellow'
              },
              dates: [new Date(event.period.start)],
              popover: {
                label: `${event.name} - 開始`,
                visibility: 'hover',
              }
            },
            {
              key: index*2+1,
              dot: 'gray',
              dates: [new Date(event.period.end)],
              popover: {
                label: `${event.name} - 結束`,
                visibility: 'hover',
              }
            }
          ]

          case eventClassification.periodicityEvent:
            return [
              ...sum,
              {
                key: index*2,
                content: {
                  color: 'purple',
                  style: {
                    fontStyle: 'italic',
                  },
                },
                dates: {
                  start: new Date(event.period.start),
                  end: new Date(event.period.end),
                },
                popover: {
                  label: `${event.name}`,
                  visibility: 'hover',
                }
              }
            ]

          case eventClassification.periodicityDiscount:
            return [
              ...sum,
              {
                key: index*2,
                bar: 'purple',
                dates: {
                  start: new Date(event.period.start),
                  end: new Date(event.period.end),
                },
                popover: {
                  label: `${event.name}`,
                  visibility: 'hover',
                }
              }
            ]

          case eventClassification.worldBoss:
          return [
            ...sum,
            {
              key: index*2,
              dot: 'orange',
              dates: [new Date(event.period.start)],
              popover: {
                label: `${event.name} - 開始`,
                visibility: 'hover',
              }
            }
          ]

          case eventClassification.clubBattle:
          return [
            ...sum,
            {
              key: index*2,
              highlight: {
                start: {
                  color: 'blue',
                },
                base: {
                  color: 'blue',
                  fillMode: 'light',
                },
                end: {
                  color: 'blue',
                  fillMode: 'outline',
                },
              },
              dates: {
                start: new Date(event.period.start),
                end: new Date(event.period.end),
              },
              popover: {
                label: `${event.name}`,
                visibility: 'hover',
              }
            }
          ]

        case eventClassification.versionUpdate:
          return [
            ...sum,
            {
              key: index*2,
              highlight: {
                color: 'yellow',
                fillMode: 'light',
              },
              dates: [
                new Date(event.period.start),
              ],
              popover: {
                label: `${event.name} 開始`,
                visibility: 'hover',
              }
            },
            {
              key: index*2 + 1,
              highlight: {
                color: 'yellow',
                fillMode: 'light',
              },
              dates: [
                new Date(event.period.end),
              ],
              popover: {
                label: `${event.name} 結束`,
                visibility: 'hover',
              }
            }
          ]
        default:
          return sum;
          // return {
          //   key: event.name,
          //   ...eventClassification.longTermEvent,
          //   dates: { start: new Date(event.period.start), end: new Date(event.period.end) },
          //   popover: {
          //     label: event.name,
          //     visibility: 'hover',
          //   }
          // }
      }
      // return {
      //   key: event.name,
      //   highlight: {
      //     color: 'purple',
      //   },
      //   dates: { start: new Date(event.period.start), end: new Date(event.period.end) },
      //   popover: {
      //     label: event.name,
      //     visibility: 'hover',
      //   }
      // }
    }, [])

  })

</script>

<style>

</style>
