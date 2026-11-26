<template>
  <div class="page-party">

    <section class="page-header">
      <div class="header-content">
        <i class="fas fa-star-and-crescent"></i>
        <h1>入党历程</h1>
        <p>张钧益 · 个人党性成长履历展示</p>
      </div>
    </section>

    <div class="party-container">

      <!-- 核心流程步骤条 -->
      <div class="process-steps">
        <div
          v-for="step in partySteps"
          :key="step.name"
          class="step"
          :class="{ active: step.active }"
        >
          <div class="step-name">{{ step.name }}</div>
          <div class="step-date">{{ step.date }}</div>
        </div>
      </div>

      <div class="content-padding">

        <!-- 个人公开信息 -->
        <div class="section-header">基本信息</div>
        <div class="info-tags">
          <div v-for="info in partyBasicInfo" :key="info.key" class="info-tag">
            <strong>{{ info.key }}</strong> {{ info.value }}
          </div>
        </div>

        <!-- 主要荣誉 -->
        <div class="section-header">主要荣誉</div>
        <div class="honor-list">
          <ul>
            <li v-for="honor in partyHonors" :key="honor">{{ honor }}</li>
          </ul>
        </div>

        <!-- 各阶段时间线 -->
        <div v-for="stage in partyStages" :key="stage.title">
          <div class="section-header">{{ stage.title }}</div>
          <div class="timeline-card">
            <div
              v-for="(row, i) in stage.rows"
              :key="i"
              class="timeline-row"
              :class="{ highlight: row.highlight }"
            >
              <div class="timeline-date">
                <span v-if="row.pending" class="tag-empty">待更新</span>
                <template v-else>{{ row.date }}</template>
              </div>
              <div class="timeline-event">{{ row.event }}</div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import { partySteps, partyBasicInfo, partyHonors, partyStages } from '@/data/party'
</script>

<style scoped>
.page-party {
  --theme-red: #b91c1c;
  --theme-red-light: #fef2f2;
  --gold: #d97706;
  --text-main: #1f2937;
  --text-muted: #6b7280;
  --border-color: #e5e7eb;
  padding-bottom: 20px;
  min-height: calc(100vh - 50px);
}

.party-container {
  max-width: 900px;
  margin: 20px auto;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}

/* 横向流程步骤条 */
.process-steps {
  display: flex;
  justify-content: space-between;
  background: var(--theme-red-light);
  margin: 20px 30px 40px;
  padding: 20px 20px;
  border-radius: 8px;
}
.step {
  text-align: center;
  position: relative;
  flex: 1;
}
.step::after {
  content: "→";
  position: absolute;
  right: -10px;
  top: 12px;
  color: #fca5a5;
  font-weight: bold;
}
.step:last-child::after { content: ""; }
.step-name {
  font-size: 13px;
  color: #991b1b;
  margin-bottom: 4px;
}
.step-date {
  font-weight: bold;
  font-size: 16px;
  color: var(--theme-red);
}
/* 当前状态高亮 */
.step.active .step-name { color: var(--gold); font-weight: bold; }
.step.active .step-date { color: var(--gold); }

.content-padding {
  padding: 0 40px 40px;
}

/* 章节标题 */
.section-header {
  font-size: 18px;
  font-weight: bold;
  color: var(--text-main);
  border-left: 4px solid var(--theme-red);
  padding-left: 12px;
  margin: 40px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

/* 个人基础信息标签化 */
.info-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 30px;
}
.info-tag {
  background: #f9fafb;
  border: 1px solid var(--border-color);
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 14px;
}
.info-tag strong {
  color: var(--text-muted);
  font-weight: normal;
  margin-right: 6px;
}

/* 荣誉列表 */
.honor-list {
  background: #fffbeb;
  border: 1px dashed #fcd34d;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 10px;
}
.honor-list ul {
  margin: 0;
  padding-left: 20px;
  color: #92400e;
  font-size: 14px;
}
.honor-list li { margin-bottom: 6px; }
.honor-list li:last-child { margin-bottom: 0; }

/* 时间线卡片排版 */
.timeline-card {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}
.timeline-row {
  display: flex;
  border-bottom: 1px solid var(--border-color);
  font-size: 14px;
  transition: background 0.2s;
}
.timeline-row:last-child { border-bottom: none; }
.timeline-row:hover { background: #f9fafb; }

.timeline-date {
  width: 180px;
  padding: 12px 20px;
  background: #fafafa;
  color: var(--theme-red);
  font-weight: 600;
  text-align: right;
  border-right: 1px solid var(--border-color);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.timeline-event {
  padding: 12px 20px;
  flex: 1;
  color: var(--text-main);
  display: flex;
  align-items: center;
}

/* 重点节点样式 */
.timeline-row.highlight {
  background: var(--theme-red-light);
}
.timeline-row.highlight .timeline-date {
  color: var(--gold);
  border-right: 3px solid var(--gold);
}
.timeline-row.highlight .timeline-event {
  font-weight: bold;
  color: #991b1b;
}

/* 标签 */
.tag-empty {
  display: inline-block;
  padding: 2px 8px;
  background: #f3f4f6;
  color: #9ca3af;
  border: 1px dashed #d1d5db;
  border-radius: 4px;
  font-size: 12px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .content-padding { padding: 0 20px 20px; }
  .process-steps { flex-direction: column; gap: 15px; margin: 20px 20px 30px; }
  .step::after { content: "↓"; right: 50%; top: 100%; transform: translateX(50%); color: #fca5a5; }
  .timeline-row { flex-direction: column; }
  .timeline-date { width: 100%; text-align: left; border-right: none; border-bottom: 1px dashed var(--border-color); padding: 8px 20px; justify-content: flex-start; }
  .timeline-event { padding: 12px 20px; }
}
</style>