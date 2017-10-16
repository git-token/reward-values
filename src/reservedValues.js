const reservedValues = {
  // events
  commit_comment: {
    // payload.action
    created: 0,
  },
  create: {
    // payload.ref_type
    repository: 1000,
    branch: 0,
    tag: 0,
  },
  delete: {
    // payload.ref_type
    branch: 0,
    tag: 0,
  },
  deployment: 1000,
  deployment_status: {
    // payload.state
    sucess: 1000,
    pending: 0,
    failure: 0,
    error: 0,
  },
  fork: 5000,
  gollum: {
    // payload.pages[0].action
    created: 0,
    edited: 0,
  },
  installation: {
    // payload.action
    created: 0,
    deleted: 0,
  },
  installation_repositories: {
    // payload.action
    added: 0,
    removed: 0,
  },
  issues_comment: {
    // payload.action
    created: 0,
    edited: 0,
    deleted: 0,
  },
  issues: {
    // payload.action
    assigned: 0,
    unassigned: 0,
    labeled: 0,
    unlabeled: 0,
    opened: 0,
    edited: 0,
    milestoned: 0,
    demilestoned: 0,
    closed: 0,
    reopened: 0,
  },
  label: {
    // payload.action
    created: 0,
    edited: 0,
    deleted: 0,
  },
  marketplace_purchase: {
    // payload.action
    purchased: 0,
    cancelled: 0,
    changed: 0,
  },
  member: {
    // payload.action
    added: 1000,
    deleted: 0,
    edited: 0,
  },
  membership: {
    // payload.action
    added: 1000,
    removed: 0,
  },
  milestone: {
    // payload.action
    created: 0,
    closed: 15000,
    opened: 0,
    edited: 0,
    deleted: 0,
  },
  organization: {
    // payload.action
    member_added: 5000,
    member_removed: 0,
    member_invited: 0,
  },
  org_block: {
    // payload.action
    blocked: 0,
    unblocked: 0,
  },
  page_build: {
    // payload.build.status
    built: 0,
  },
  project_card: {
    // payload.action
    created: 0,
    edited: 0,
    converted: 0,
    moved: 0,
    deleted: 0,
  },
  project_column: {
    // payload.action
    created: 0,
    edited: 0,
    moved: 0,
    deleted: 0,
  },
  project: {
    // payload.action
    created: 0,
    edited: 0,
    closed: 1000,
    reopened: 0,
    deleted: 0,
  },
  public: 15000,
  pull_request: {
    // payload.action
    assigned: 0,
    unassigned: 0,
    review_requested: 0,
    review_request_removed: 0,
    labeled: 0,
    unlabeled: 0,
    opened: 0,
    edited: 0,
    closed: 1000, // !!payload.merged
    reopened: 0,
  },
  pull_request_review: {
    // payload.action
    submitted: 0,
    edited: 0,
    dismissed: 0,
  },
  pull_request_review_comment: {
    // payload.action
    created: 0,
    edited: 0,
    deleted: 0,
  },
  ping: 15000,
  push: 0,
  release: {
    // payload.action
    published: 0,
  },
  repository: {
    // payload.action
    created: 1000,
    deleted: 0,
    publicized: 1000,
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
    created: 0,
    deleted: 0,
    edited: 0,
    added_to_repository: 1000,
    removed_from_repository: 0,
  },
  team_add: 1000,
  watch: {
    // payload.action
    started: 250,
  }
}

// console.log('reservedValues', JSON.stringify(reservedValues, null, 2))

module.exports = reservedValues
