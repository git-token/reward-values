const rewardValues = {
  // events
  commit_comment: {
    // payload.action
    // payload.comment.body.length * value
    created: 250,
  },
  create: {
    // payload.ref_type
    repository: 2000,
    branch: 150,
    tag: 150,
  },
  delete: {
    // payload.ref_type
    branch: 0,
    tag: 0,
  },
  deployment: 1000,
  deployment_status: {
    // payload.state
    sucess: 500,
    pending: 0,
    failure: 0,
    error: 0,
  },
  fork: 1000,
  gollum: {
    // payload.pages[0].action
    created: 500,
    edited: 250,
  },
  installation: {
    // payload.action
    created: 1000,
    deleted: 0,
  },
  installation_repositories: {
    // payload.action
    added: 1000,
    removed: 0,
  },
  issues_comment: {
    // payload.action
    created: 1000,
    edited: 250,
    deleted: 0,
  },
  issues: {
    // payload.action
    assigned: 100,
    unassigned: 0,
    labeled: 100,
    unlabeled: 0,
    opened: 500,
    edited: 100,
    milestoned: 100,
    demilestoned: 0,
    closed: 500,
    reopened: 0,
  },
  label: {
    // payload.action
    created: 100,
    edited: 50,
    deleted: 0,
  },
  marketplace_purchase: {
    // payload.action
    purchased: 1000,
    cancelled: 0,
    changed: 250,
  },
  member: {
    // payload.action
    added: 1000,
    deleted: 0,
    edited: 250,
  },
  membership: {
    // payload.action
    added: 500,
    removed: 0,
  },
  milestone: {
    // payload.action
    created: 1500,
    closed: 1500,
    opened: 500,
    edited: 100,
    deleted: 0,
  },
  organization: {
    // payload.action
    member_added: 1000,
    member_removed: 0,
    member_invited: 1000,
  },
  org_block: {
    // payload.action
    blocked: 100,
    unblocked: 0,
  },
  page_build: {
    // payload.build.status
    built: 2500,
  },
  project_card: {
    // payload.action
    created: 250,
    edited: 100,
    converted: 100,
    moved: 100,
    deleted: 0,
  },
  project_column: {
    // payload.action
    created: 250,
    edited: 100,
    moved: 100,
    deleted: 0,
  },
  project: {
    // payload.action
    created: 500,
    edited: 100,
    closed: 500,
    reopened: 0,
    deleted: 0,
  },
  public: 0,
  pull_request: {
    // payload.action
    assigned: 100,
    unassigned: 0,
    review_requested: 100,
    review_request_removed: 0,
    labeled: 100,
    unlabeled: 0,
    opened: 100,
    edited: 100,
    closed: 100, // !!payload.merged
    reopened: 0,
  },
  pull_request_review: {
    // payload.action
    submitted: 250,
    edited: 100,
    dismissed: 100,
  },
  pull_request_review_comment: {
    // payload.action
    created: 250,
    edited: 100,
    deleted: 0,
  },
  ping: 1000,
  push: 250,
  release: {
    // payload.action
    published: 1000,
  },
  repository: {
    // payload.action
    created: 1000,
    deleted: 0,
    publicized: 250,
    privatized: 0,
  },
  status: {
    // payload.state
    pending: 0,
    success: 500,
    failure: 0,
    error: 0,
  },
  team: {
    // payload.action
    created: 1000,
    deleted: 0,
    edited: 100,
    added_to_repository: 100,
    removed_from_repository: 0,
  },
  team_add: 1000,
  watch: {
    // payload.action
    started: 250,
  }
}

// console.log('rewardValues', JSON.stringify(rewardValues, null, 2))

module.exports = rewardValues
