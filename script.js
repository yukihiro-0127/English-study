const storage = {
  get(key, fallback) {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    try {
      return JSON.parse(raw);
    } catch (error) {
      console.warn("Failed to parse storage", error);
      return fallback;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

const dataSets = {
  daily: [
    {
      id: "daily-1",
      jp: "今日の打ち合わせは予定通り行います。",
      en: "The meeting will go ahead as scheduled today.",
      context: "Daily coordination",
      hint: "go ahead as scheduled",
    },
    {
      id: "daily-2",
      jp: "資料は後ほど共有します。",
      en: "I will share the materials shortly.",
      context: "Follow-up",
      hint: "share the materials shortly",
    },
    {
      id: "daily-3",
      jp: "少し遅れますが必ず参加します。",
      en: "I'll be a few minutes late, but I will join for sure.",
      context: "Schedule update",
      hint: "a few minutes late",
    },
    {
      id: "daily-4",
      jp: "要点を先に確認しましょう。",
      en: "Let's confirm the key points first.",
      context: "Discussion setup",
      hint: "confirm the key points",
    },
    {
      id: "daily-5",
      jp: "あとで詳細をチャットします。",
      en: "I'll message you the details later.",
      context: "Casual follow-up",
      hint: "message you the details",
    },
    {
      id: "daily-6",
      jp: "この件は私が引き継ぎます。",
      en: "I'll take over this item.",
      context: "Ownership",
      hint: "take over this item",
    },
    {
      id: "daily-7",
      jp: "今の進捗を簡単に共有します。",
      en: "I'll give a quick update on the progress.",
      context: "Status update",
      hint: "quick update",
    },
    {
      id: "daily-8",
      jp: "認識が合っているか確認させてください。",
      en: "Let me confirm we're aligned.",
      context: "Alignment",
      hint: "confirm we're aligned",
    },
    {
      id: "daily-9",
      jp: "次のステップを整理しましょう。",
      en: "Let's organize the next steps.",
      context: "Planning",
      hint: "organize the next steps",
    },
    {
      id: "daily-10",
      jp: "その点は後で掘り下げます。",
      en: "We'll dive into that point later.",
      context: "Agenda management",
      hint: "dive into that point",
    },
    {
      id: "daily-11",
      jp: "アクションアイテムを整理して共有します。",
      en: "I'll consolidate the action items and share them.",
      context: "Meeting - action items",
      hint: "consolidate the action items",
    },
    {
      id: "daily-12",
      jp: "合意した内容を議事録に反映します。",
      en: "I'll reflect the agreed points in the minutes.",
      context: "Meeting - follow-up",
      hint: "reflect the agreed points",
    },
    {
      id: "daily-13",
      jp: "今日の決定事項だけ確認しましょう。",
      en: "Let's just confirm today's decisions.",
      context: "Meeting - wrap-up",
      hint: "confirm today's decisions",
    },
    {
      id: "daily-14",
      jp: "この話題は別枠で時間を取りましょう。",
      en: "Let's schedule a separate slot for this topic.",
      context: "Meeting - scope control",
      hint: "separate slot",
    },
    {
      id: "daily-15",
      jp: "時間が限られているので要点に絞ります。",
      en: "Given the time, let's focus on the essentials.",
      context: "Meeting - time management",
      hint: "focus on the essentials",
    },
    {
      id: "daily-16",
      jp: "今の理解で合っていますか？",
      en: "Is my understanding correct?",
      context: "Clarification",
      hint: "understanding correct",
    },
    {
      id: "daily-17",
      jp: "この前提を共有して進めたいです。",
      en: "I'd like to move forward with this assumption.",
      context: "Meeting - alignment",
      hint: "move forward with this assumption",
    },
    {
      id: "daily-18",
      jp: "関係者に今日中に共有します。",
      en: "I'll brief the stakeholders by end of day.",
      context: "Follow-up",
      hint: "by end of day",
    },
    {
      id: "daily-19",
      jp: "要件の優先度を再確認しましょう。",
      en: "Let's recheck the priority of the requirements.",
      context: "Planning",
      hint: "priority of the requirements",
    },
    {
      id: "daily-20",
      jp: "この点は次回までに確認します。",
      en: "I'll validate this point before the next meeting.",
      context: "Action item",
      hint: "validate this point",
    },
    {
      id: "daily-21",
      jp: "こちらの意図が伝わっているか確認したいです。",
      en: "I want to make sure my intent is clear.",
      context: "Clarification",
      hint: "intent is clear",
    },
    {
      id: "daily-22",
      jp: "この資料は最新版ですか？",
      en: "Is this the latest version of the deck?",
      context: "Meeting - materials",
      hint: "latest version",
    },
    {
      id: "daily-23",
      jp: "この判断は私の権限外です。",
      en: "This decision is outside my scope.",
      context: "Escalation",
      hint: "outside my scope",
    },
    {
      id: "daily-24",
      jp: "本日はここまでにしましょう。",
      en: "Let's wrap here for today.",
      context: "Meeting - wrap-up",
      hint: "wrap here",
    },
    {
      id: "daily-25",
      jp: "次の打ち合わせまでに整理します。",
      en: "I'll organize this before our next session.",
      context: "Follow-up",
      hint: "organize this",
    },
    {
      id: "daily-26",
      jp: "該当部署の意見も確認しておきます。",
      en: "I'll check with the relevant team as well.",
      context: "Coordination",
      hint: "relevant team",
    },
    {
      id: "daily-27",
      jp: "念のため、ポイントを再共有します。",
      en: "Just to be safe, I'll restate the key points.",
      context: "Clarification",
      hint: "restate the key points",
    },
    {
      id: "daily-28",
      jp: "チーム内で一度認識合わせします。",
      en: "We'll align internally first.",
      context: "Team alignment",
      hint: "align internally",
    },
    {
      id: "daily-29",
      jp: "こちらで一次案を作って共有します。",
      en: "I'll draft the first version and share it.",
      context: "Drafting",
      hint: "draft the first version",
    },
    {
      id: "daily-30",
      jp: "期限に影響が出ないか確認しています。",
      en: "I'm checking whether this impacts the deadline.",
      context: "Schedule risk",
      hint: "impacts the deadline",
    },
    {
      id: "daily-31",
      jp: "ここはスコープ外として整理します。",
      en: "Let's treat this as out of scope for now.",
      context: "Scope control",
      hint: "out of scope",
    },
    {
      id: "daily-32",
      jp: "前提が変わったので再度確認します。",
      en: "The assumptions changed, so I'll reconfirm.",
      context: "Clarification",
      hint: "assumptions changed",
    },
    {
      id: "daily-33",
      jp: "見積もりの根拠を共有いただけますか。",
      en: "Could you share the basis for the estimate?",
      context: "Estimation",
      hint: "basis for the estimate",
    },
    {
      id: "daily-34",
      jp: "本日の議題に戻しましょう。",
      en: "Let's come back to today's agenda.",
      context: "Meeting - focus",
      hint: "come back to the agenda",
    },
    {
      id: "daily-35",
      jp: "議事録のドラフトを送ります。",
      en: "I'll send a draft of the minutes.",
      context: "Meeting - minutes",
      hint: "draft of the minutes",
    },
    {
      id: "daily-36",
      jp: "今回の判断は暫定です。",
      en: "This is a tentative decision.",
      context: "Decision",
      hint: "tentative decision",
    },
    {
      id: "daily-37",
      jp: "念のためリスクを先に共有します。",
      en: "I'll flag the risks upfront.",
      context: "Risk communication",
      hint: "flag the risks",
    },
    {
      id: "daily-38",
      jp: "このタスクは私がオーナーです。",
      en: "I'm the owner of this task.",
      context: "Ownership",
      hint: "owner of this task",
    },
    {
      id: "daily-39",
      jp: "こちらの提案で進めて問題ないですか？",
      en: "Is it okay to proceed with this proposal?",
      context: "Confirmation",
      hint: "proceed with this proposal",
    },
    {
      id: "daily-40",
      jp: "仕様が確定次第連絡します。",
      en: "I'll inform you once the specs are finalized.",
      context: "Follow-up",
      hint: "specs are finalized",
    },
    {
      id: "daily-41",
      jp: "現時点ではこの方向で進めます。",
      en: "For now, we'll proceed with this direction.",
      context: "Planning",
      hint: "proceed with this direction",
    },
    {
      id: "daily-42",
      jp: "後ほど優先度を整理します。",
      en: "I'll sort the priorities later.",
      context: "Planning",
      hint: "sort the priorities",
    },
    {
      id: "daily-43",
      jp: "次の会議までに案をまとめます。",
      en: "I'll consolidate the proposal before the next meeting.",
      context: "Follow-up",
      hint: "consolidate the proposal",
    },
    {
      id: "daily-44",
      jp: "この点は追加の確認が必要です。",
      en: "We need additional validation on this point.",
      context: "Clarification",
      hint: "additional validation",
    },
    {
      id: "daily-45",
      jp: "今週中に結論を出す予定です。",
      en: "We're aiming to reach a conclusion this week.",
      context: "Timeline",
      hint: "reach a conclusion",
    },
    {
      id: "daily-46",
      jp: "前提が崩れる場合はすぐ共有します。",
      en: "I'll let you know immediately if the assumptions break.",
      context: "Risk communication",
      hint: "assumptions break",
    },
    {
      id: "daily-47",
      jp: "この点は未確定なので保留にします。",
      en: "This is still open, so we'll park it for now.",
      context: "Meeting - parking lot",
      hint: "park it",
    },
    {
      id: "daily-48",
      jp: "次回は結論ベースで話したいです。",
      en: "Next time I'd like to focus on decisions.",
      context: "Meeting - agenda",
      hint: "focus on decisions",
    },
    {
      id: "daily-49",
      jp: "この資料は共有範囲に注意してください。",
      en: "Please be mindful of the distribution list for this deck.",
      context: "Communication hygiene",
      hint: "distribution list",
    },
    {
      id: "daily-50",
      jp: "こちらは参考情報として共有します。",
      en: "Sharing this as reference only.",
      context: "Email - FYI",
      hint: "as reference only",
    },
    {
      id: "daily-51",
      jp: "関係者の空きを確認して調整します。",
      en: "I'll check availability and coordinate with stakeholders.",
      context: "Scheduling",
      hint: "check availability",
    },
    {
      id: "daily-52",
      jp: "こちらの認識で問題なければ進めます。",
      en: "If this understanding is correct, we'll proceed.",
      context: "Confirmation",
      hint: "if this understanding is correct",
    },
    {
      id: "daily-53",
      jp: "この依頼は優先度が高いです。",
      en: "This request is high priority.",
      context: "Priority",
      hint: "high priority",
    },
    {
      id: "daily-54",
      jp: "次のステップに入る前に確認したい点があります。",
      en: "Before moving on, I have a few checks.",
      context: "Clarification",
      hint: "before moving on",
    },
    {
      id: "daily-55",
      jp: "関連チームへ共有済みです。",
      en: "I've already looped in the relevant teams.",
      context: "Coordination",
      hint: "looped in",
    },
    {
      id: "daily-56",
      jp: "こちらで合意した内容をまとめます。",
      en: "I'll summarize what we agreed on.",
      context: "Meeting - wrap-up",
      hint: "summarize what we agreed on",
    },
    {
      id: "daily-57",
      jp: "この件は次の優先順位にします。",
      en: "We'll put this in the next priority tier.",
      context: "Prioritization",
      hint: "priority tier",
    },
    {
      id: "daily-58",
      jp: "念のため、再度確認します。",
      en: "Just to confirm once more.",
      context: "Clarification",
      hint: "confirm once more",
    },
    {
      id: "daily-59",
      jp: "現時点では見積もりを更新中です。",
      en: "We're updating the estimate right now.",
      context: "Planning",
      hint: "updating the estimate",
    },
    {
      id: "daily-60",
      jp: "今週はレビューに集中します。",
      en: "This week we're focused on reviews.",
      context: "Work planning",
      hint: "focused on reviews",
    },
    {
      id: "daily-61",
      jp: "次回までに方向性を揃えます。",
      en: "We'll align on the direction before next time.",
      context: "Alignment",
      hint: "align on the direction",
    },
    {
      id: "daily-62",
      jp: "この件は一旦クローズします。",
      en: "Let's close this out for now.",
      context: "Meeting - closure",
      hint: "close this out",
    },
    {
      id: "daily-63",
      jp: "こちらで確認でき次第連絡します。",
      en: "I'll get back once I confirm on my side.",
      context: "Follow-up",
      hint: "get back once I confirm",
    },
    {
      id: "daily-64",
      jp: "優先順位の変更があれば教えてください。",
      en: "Let me know if priorities change.",
      context: "Planning",
      hint: "priorities change",
    },
    {
      id: "daily-65",
      jp: "こちらの対応期限を確認させてください。",
      en: "Could you confirm the deadline for this item?",
      context: "Deadline confirmation",
      hint: "confirm the deadline",
    },
    {
      id: "daily-66",
      jp: "対応に必要な情報を整理します。",
      en: "I'll organize the information needed to proceed.",
      context: "Preparation",
      hint: "information needed to proceed",
    },
    {
      id: "daily-67",
      jp: "この点は合意事項として記録します。",
      en: "We'll log this as an agreed item.",
      context: "Meeting - record",
      hint: "log this as agreed",
    },
    {
      id: "daily-68",
      jp: "必要な判断材料を揃えます。",
      en: "I'll pull together the inputs needed for the decision.",
      context: "Decision prep",
      hint: "inputs needed",
    },
    {
      id: "daily-69",
      jp: "今日の内容は共有事項としてまとめます。",
      en: "I'll recap today's discussion for circulation.",
      context: "Meeting - recap",
      hint: "recap for circulation",
    },
    {
      id: "daily-70",
      jp: "こちらの対応状況を定期的に更新します。",
      en: "I'll provide regular updates on this.",
      context: "Status update",
      hint: "regular updates",
    },
  ],
  business: [
    {
      id: "business-1",
      jp: "主要な意思決定者を巻き込む必要があります。",
      en: "We need to engage the key decision makers.",
      context: "Stakeholder alignment",
      hint: "engage the key decision makers",
    },
    {
      id: "business-2",
      jp: "リスクとトレードオフを明確に説明します。",
      en: "We'll clearly articulate the risks and trade-offs.",
      context: "Decision-making",
      hint: "articulate the risks",
    },
    {
      id: "business-3",
      jp: "優先順位を合わせるために一度整理しましょう。",
      en: "Let's revisit priorities to stay aligned.",
      context: "Alignment",
      hint: "revisit priorities",
    },
    {
      id: "business-4",
      jp: "この課題はエスカレーションが必要です。",
      en: "This issue needs to be escalated.",
      context: "Escalation",
      hint: "needs to be escalated",
    },
    {
      id: "business-5",
      jp: "影響範囲を可視化して報告します。",
      en: "We'll report with visibility into the impact scope.",
      context: "Reporting",
      hint: "impact scope",
    },
    {
      id: "business-6",
      jp: "最終判断は経営層に委ねます。",
      en: "We'll defer the final decision to leadership.",
      context: "Governance",
      hint: "defer the final decision",
    },
    {
      id: "business-7",
      jp: "期限遵守のためにリソースを再配分します。",
      en: "We'll reallocate resources to meet the deadline.",
      context: "Delivery planning",
      hint: "reallocate resources",
    },
    {
      id: "business-8",
      jp: "責任範囲を明文化して合意を取ります。",
      en: "We'll document ownership and secure agreement.",
      context: "Accountability",
      hint: "document ownership",
    },
    {
      id: "business-9",
      jp: "意思決定の根拠を資料に残します。",
      en: "We'll capture the rationale in the deck.",
      context: "Executive reporting",
      hint: "capture the rationale",
    },
    {
      id: "business-10",
      jp: "ステークホルダーに現実的な期待値を設定します。",
      en: "We'll set realistic expectations with stakeholders.",
      context: "Expectation management",
      hint: "realistic expectations",
    },
    {
      id: "business-11",
      jp: "この変更は法務レビューが必須です。",
      en: "This change requires legal review.",
      context: "Compliance",
      hint: "requires legal review",
    },
    {
      id: "business-12",
      jp: "重要指標に影響が出るため先に共有します。",
      en: "I'm flagging this early because it impacts key metrics.",
      context: "Risk communication",
      hint: "flagging this early",
    },
    {
      id: "business-13",
      jp: "会議後に決定事項をまとめて送ります。",
      en: "I'll send a summary of the decisions after the meeting.",
      context: "Meeting follow-up",
      hint: "summary of the decisions",
    },
    {
      id: "business-14",
      jp: "アクションアイテムの期限を明確にしましょう。",
      en: "Let's clarify the due dates for action items.",
      context: "Meeting - action items",
      hint: "due dates",
    },
    {
      id: "business-15",
      jp: "議論が拡散しているので論点を戻します。",
      en: "The discussion is drifting, so let's refocus.",
      context: "Meeting facilitation",
      hint: "refocus",
    },
    {
      id: "business-16",
      jp: "合意形成のため、懸念点を出しておきたいです。",
      en: "I'd like to surface concerns to reach alignment.",
      context: "Alignment",
      hint: "surface concerns",
    },
    {
      id: "business-17",
      jp: "この提案に反対意見はありますか？",
      en: "Any objections to this proposal?",
      context: "Meeting - decision",
      hint: "objections",
    },
    {
      id: "business-18",
      jp: "検討事項を整理し、次回の議題に入れます。",
      en: "We'll organize the open points and include them next time.",
      context: "Meeting planning",
      hint: "open points",
    },
    {
      id: "business-19",
      jp: "念のため、合意事項を文書化します。",
      en: "To be safe, we'll document the agreements.",
      context: "Governance",
      hint: "document the agreements",
    },
    {
      id: "business-20",
      jp: "関係者全員に同じメッセージを出します。",
      en: "We'll send a consistent message to all stakeholders.",
      context: "Communication",
      hint: "consistent message",
    },
    {
      id: "business-21",
      jp: "次のアクションを明確にして終了します。",
      en: "Let's close by clarifying the next actions.",
      context: "Meeting wrap-up",
      hint: "clarifying the next actions",
    },
    {
      id: "business-22",
      jp: "この内容はFYIとして共有します。",
      en: "Sharing this as FYI.",
      context: "Email",
      hint: "FYI",
    },
    {
      id: "business-23",
      jp: "対応が遅れている点について報告します。",
      en: "I'm reporting the delay in our response.",
      context: "Status report",
      hint: "reporting the delay",
    },
    {
      id: "business-24",
      jp: "顧客に影響するので先に連絡します。",
      en: "I'm informing the client first since it impacts them.",
      context: "Customer communication",
      hint: "informing the client",
    },
    {
      id: "business-25",
      jp: "レビューのためにドラフトを共有します。",
      en: "Sharing the draft for your review.",
      context: "Business writing",
      hint: "draft for your review",
    },
    {
      id: "business-26",
      jp: "承認が取れ次第進めます。",
      en: "We'll proceed once approval is secured.",
      context: "Governance",
      hint: "once approval is secured",
    },
    {
      id: "business-27",
      jp: "依頼内容を整理して再送します。",
      en: "I'll organize the request and resend it.",
      context: "Email - request",
      hint: "resend",
    },
    {
      id: "business-28",
      jp: "対応優先度を明確にする必要があります。",
      en: "We need to make the priority explicit.",
      context: "Prioritization",
      hint: "priority explicit",
    },
    {
      id: "business-29",
      jp: "想定リスクを先に共有します。",
      en: "I'll share the anticipated risks upfront.",
      context: "Risk communication",
      hint: "anticipated risks",
    },
    {
      id: "business-30",
      jp: "今週の報告をまとめました。",
      en: "I've compiled this week's report.",
      context: "Reporting",
      hint: "compiled this week's report",
    },
    {
      id: "business-31",
      jp: "エスカレーションのルートを確認しましょ。",
      en: "Let's confirm the escalation path.",
      context: "Escalation",
      hint: "escalation path",
    },
    {
      id: "business-32",
      jp: "この判断は複数部門の合意が必要です。",
      en: "This decision requires cross-functional alignment.",
      context: "Stakeholder alignment",
      hint: "cross-functional alignment",
    },
    {
      id: "business-33",
      jp: "この変更はコストに影響します。",
      en: "This change impacts cost.",
      context: "Business impact",
      hint: "impacts cost",
    },
    {
      id: "business-34",
      jp: "次の会議で結論を出す予定です。",
      en: "We plan to make the call in the next meeting.",
      context: "Decision timing",
      hint: "make the call",
    },
    {
      id: "business-35",
      jp: "顧客の期待値を再確認します。",
      en: "We'll reconfirm the client's expectations.",
      context: "Expectation management",
      hint: "reconfirm expectations",
    },
    {
      id: "business-36",
      jp: "今回の判断は暫定で進めます。",
      en: "We'll proceed on a tentative basis.",
      context: "Decision",
      hint: "tentative basis",
    },
    {
      id: "business-37",
      jp: "リスクは残りますがメリットが上回ります。",
      en: "There is risk, but the upside outweighs it.",
      context: "Trade-off",
      hint: "upside outweighs it",
    },
    {
      id: "business-38",
      jp: "次のステップを明文化して共有します。",
      en: "I'll document the next steps and share them.",
      context: "Meeting follow-up",
      hint: "document the next steps",
    },
    {
      id: "business-39",
      jp: "関係者に確認を依頼します。",
      en: "I'll ask the stakeholders for confirmation.",
      context: "Coordination",
      hint: "ask for confirmation",
    },
    {
      id: "business-40",
      jp: "追加の承認が必要であれば教えてください。",
      en: "Let me know if additional approval is needed.",
      context: "Governance",
      hint: "additional approval",
    },
    {
      id: "business-41",
      jp: "こちらの判断はリスク評価に基づいています。",
      en: "This call is based on the risk assessment.",
      context: "Decision rationale",
      hint: "risk assessment",
    },
    {
      id: "business-42",
      jp: "この件は既に対応済みです。",
      en: "This has already been addressed.",
      context: "Status update",
      hint: "already been addressed",
    },
    {
      id: "business-43",
      jp: "対象範囲を明確にした上で進めます。",
      en: "We'll proceed after clarifying the scope.",
      context: "Scope management",
      hint: "clarifying the scope",
    },
    {
      id: "business-44",
      jp: "結論だけ先に共有します。",
      en: "Sharing the conclusion upfront.",
      context: "Executive communication",
      hint: "conclusion upfront",
    },
    {
      id: "business-45",
      jp: "次の報告で詳細を共有します。",
      en: "I'll share the details in the next report.",
      context: "Reporting",
      hint: "next report",
    },
    {
      id: "business-46",
      jp: "今回の判断はスケジュール優先です。",
      en: "This decision prioritizes the schedule.",
      context: "Trade-off",
      hint: "prioritizes the schedule",
    },
    {
      id: "business-47",
      jp: "顧客の優先順位に合わせて調整します。",
      en: "We'll adjust to the client's priorities.",
      context: "Customer alignment",
      hint: "adjust to the client's priorities",
    },
    {
      id: "business-48",
      jp: "この点は経営層への報告が必要です。",
      en: "This needs to be reported to leadership.",
      context: "Executive reporting",
      hint: "reported to leadership",
    },
    {
      id: "business-49",
      jp: "暫定合意として進めます。",
      en: "We'll proceed with a provisional agreement.",
      context: "Alignment",
      hint: "provisional agreement",
    },
    {
      id: "business-50",
      jp: "現状の課題を整理し直します。",
      en: "We'll reframe the current issues.",
      context: "Problem framing",
      hint: "reframe the issues",
    },
    {
      id: "business-51",
      jp: "この決定は利益率に影響します。",
      en: "This decision affects our margin.",
      context: "Business impact",
      hint: "affects our margin",
    },
    {
      id: "business-52",
      jp: "顧客対応の状況を定期的に共有します。",
      en: "We'll provide regular updates on client communication.",
      context: "Customer communication",
      hint: "regular updates",
    },
    {
      id: "business-53",
      jp: "この点は事前に合意を取っておきます。",
      en: "Let's get agreement on this upfront.",
      context: "Alignment",
      hint: "agreement upfront",
    },
    {
      id: "business-54",
      jp: "今回の対応は例外対応です。",
      en: "This is an exception handling.",
      context: "Governance",
      hint: "exception handling",
    },
    {
      id: "business-55",
      jp: "次のフェーズの条件を整理します。",
      en: "We'll define the criteria for the next phase.",
      context: "Planning",
      hint: "criteria for the next phase",
    },
    {
      id: "business-56",
      jp: "顧客の合意が得られたら進めます。",
      en: "We'll proceed once the client signs off.",
      context: "Customer approval",
      hint: "client signs off",
    },
    {
      id: "business-57",
      jp: "新しい依頼は優先順位を見直してから対応します。",
      en: "We'll take new requests after we recheck priorities.",
      context: "Prioritization",
      hint: "recheck priorities",
    },
    {
      id: "business-58",
      jp: "緊急度の高いものから着手します。",
      en: "We'll start with the most urgent items.",
      context: "Prioritization",
      hint: "most urgent items",
    },
    {
      id: "business-59",
      jp: "このリスクは現時点で許容範囲です。",
      en: "The risk is within tolerance at this point.",
      context: "Risk management",
      hint: "within tolerance",
    },
    {
      id: "business-60",
      jp: "関連部門のレビューを入れます。",
      en: "We'll incorporate a cross-team review.",
      context: "Governance",
      hint: "cross-team review",
    },
    {
      id: "business-61",
      jp: "この点はステークホルダーに早めに共有します。",
      en: "We'll socialize this with stakeholders early.",
      context: "Stakeholder management",
      hint: "socialize this",
    },
    {
      id: "business-62",
      jp: "判断の理由を簡潔にまとめます。",
      en: "I'll summarize the rationale concisely.",
      context: "Executive communication",
      hint: "rationale concisely",
    },
    {
      id: "business-63",
      jp: "追加コストの発生条件を整理します。",
      en: "We'll define the conditions that trigger additional cost.",
      context: "Commercial",
      hint: "trigger additional cost",
    },
    {
      id: "business-64",
      jp: "今週中に経営層に報告します。",
      en: "We'll brief leadership this week.",
      context: "Executive reporting",
      hint: "brief leadership",
    },
    {
      id: "business-65",
      jp: "合意事項は公式文書に反映します。",
      en: "We'll reflect the agreements in the official document.",
      context: "Governance",
      hint: "official document",
    },
    {
      id: "business-66",
      jp: "この件は意思決定の前提として扱います。",
      en: "We'll treat this as a decision prerequisite.",
      context: "Decision framing",
      hint: "decision prerequisite",
    },
    {
      id: "business-67",
      jp: "影響範囲が広いので段階的に進めます。",
      en: "We'll phase this given the broad impact.",
      context: "Risk management",
      hint: "phase this",
    },
    {
      id: "business-68",
      jp: "この変更は契約上の確認が必要です。",
      en: "This change needs contractual review.",
      context: "Compliance",
      hint: "contractual review",
    },
    {
      id: "business-69",
      jp: "依頼内容を明確にするため追加質問します。",
      en: "I'll ask a few questions to clarify the request.",
      context: "Business writing",
      hint: "clarify the request",
    },
    {
      id: "business-70",
      jp: "この件は次回のステアリングで判断します。",
      en: "We'll decide this in the next steering meeting.",
      context: "Governance",
      hint: "steering meeting",
    },
    {
      id: "business-71",
      jp: "念のため合意事項を再確認させてください。",
      en: "Let me reconfirm the agreed items.",
      context: "Alignment",
      hint: "reconfirm the agreed items",
    },
    {
      id: "business-72",
      jp: "この内容は経営層に要点だけ伝えます。",
      en: "We'll brief leadership on the highlights only.",
      context: "Executive communication",
      hint: "highlights only",
    },
    {
      id: "business-73",
      jp: "意思決定に必要な追加情報を集めます。",
      en: "We'll gather additional inputs for the decision.",
      context: "Decision prep",
      hint: "additional inputs",
    },
    {
      id: "business-74",
      jp: "反対意見があれば今出してください。",
      en: "If there are objections, please raise them now.",
      context: "Meeting - decision",
      hint: "raise them now",
    },
    {
      id: "business-75",
      jp: "リスクが高いので先に合意を取ります。",
      en: "Given the risk, let's secure alignment first.",
      context: "Risk management",
      hint: "secure alignment",
    },
    {
      id: "business-76",
      jp: "想定外の作業が発生したため共有します。",
      en: "I'm flagging unexpected work that came up.",
      context: "Issue reporting",
      hint: "unexpected work",
    },
    {
      id: "business-77",
      jp: "対応範囲を明確にした上で調整します。",
      en: "We'll align after clarifying the coverage.",
      context: "Scope management",
      hint: "clarifying the coverage",
    },
    {
      id: "business-78",
      jp: "現状の前提で進める場合のリスクを記載します。",
      en: "We'll document the risks under the current assumptions.",
      context: "Risk management",
      hint: "current assumptions",
    },
    {
      id: "business-79",
      jp: "この点は顧客合意なしでは進められません。",
      en: "We can't proceed without client sign-off on this.",
      context: "Customer approval",
      hint: "client sign-off",
    },
    {
      id: "business-80",
      jp: "重要事項だけ先に合意を取りたいです。",
      en: "I'd like to secure agreement on the critical points first.",
      context: "Alignment",
      hint: "critical points",
    },
    {
      id: "business-81",
      jp: "全体像を共有した上で詳細に入ります。",
      en: "We'll share the big picture before diving into details.",
      context: "Communication",
      hint: "big picture",
    },
    {
      id: "business-82",
      jp: "会議後に簡潔なサマリーを送りします。",
      en: "I'll send a concise summary after the meeting.",
      context: "Business writing",
      hint: "concise summary",
    },
  ],
  enterprise: [
    {
      id: "enterprise-1",
      jp: "クラウド移行の前提条件を経営層と合意します。",
      en: "We'll align on the cloud migration prerequisites with leadership.",
      context: "Cloud strategy",
      hint: "migration prerequisites",
    },
    {
      id: "enterprise-2",
      jp: "API統合の影響を既存システムごとに評価します。",
      en: "We'll assess API integration impact across legacy systems.",
      context: "System integration",
      hint: "assess API integration",
    },
    {
      id: "enterprise-3",
      jp: "デプロイ後のロールバック手順を標準化します。",
      en: "We'll standardize the rollback procedure post-deployment.",
      context: "DevOps",
      hint: "standardize rollback",
    },
    {
      id: "enterprise-4",
      jp: "障害時の意思決定権限を明確にします。",
      en: "We'll clarify decision authority during incidents.",
      context: "Incident response",
      hint: "decision authority",
    },
    {
      id: "enterprise-5",
      jp: "セキュリティ監査に備えて証跡を整理します。",
      en: "We'll organize audit trails for the security review.",
      context: "Security compliance",
      hint: "audit trails",
    },
    {
      id: "enterprise-6",
      jp: "データガバナンスの責任範囲を再定義します。",
      en: "We'll redefine ownership for data governance.",
      context: "Governance",
      hint: "redefine ownership",
    },
    {
      id: "enterprise-7",
      jp: "顧客影響を最小化するため段階的にリリースします。",
      en: "We'll release in phases to minimize customer impact.",
      context: "Release planning",
      hint: "release in phases",
    },
    {
      id: "enterprise-8",
      jp: "SLA違反のリスクを早期に報告します。",
      en: "We'll report the SLA breach risk early.",
      context: "Service management",
      hint: "SLA breach risk",
    },
    {
      id: "enterprise-9",
      jp: "システム統合の依存関係を可視化します。",
      en: "We'll visualize dependencies for system integration.",
      context: "Architecture",
      hint: "visualize dependencies",
    },
    {
      id: "enterprise-10",
      jp: "本番障害の根本原因分析を完了させます。",
      en: "We'll complete the root cause analysis for the production outage.",
      context: "Incident management",
      hint: "root cause analysis",
    },
    {
      id: "enterprise-11",
      jp: "コンプライアンス要件を満たすため変更管理を強化します。",
      en: "We'll tighten change management to meet compliance requirements.",
      context: "Compliance",
      hint: "tighten change management",
    },
    {
      id: "enterprise-12",
      jp: "アーキテクチャの意思決定をデザインレビューで確定します。",
      en: "We'll finalize architectural decisions in the design review.",
      context: "Architecture review",
      hint: "finalize decisions",
    },
    {
      id: "enterprise-13",
      jp: "クラウド基盤のコスト最適化を進めます。",
      en: "We'll drive cloud cost optimization.",
      context: "Cloud operations",
      hint: "cost optimization",
    },
    {
      id: "enterprise-14",
      jp: "本番環境への影響を最小化する計画が必要です。",
      en: "We need a plan to minimize production impact.",
      context: "Release planning",
      hint: "minimize production impact",
    },
    {
      id: "enterprise-15",
      jp: "新しいAPI仕様は後方互換性を維持します。",
      en: "The new API spec preserves backward compatibility.",
      context: "API management",
      hint: "backward compatibility",
    },
    {
      id: "enterprise-16",
      jp: "障害対応の一次連絡先を明確にします。",
      en: "We'll identify the primary contact for incident response.",
      context: "Incident response",
      hint: "primary contact",
    },
    {
      id: "enterprise-17",
      jp: "監査要件に合わせてログ保持期間を延長します。",
      en: "We'll extend log retention to meet audit requirements.",
      context: "Security compliance",
      hint: "log retention",
    },
    {
      id: "enterprise-18",
      jp: "データ分類の基準を統一します。",
      en: "We'll standardize data classification criteria.",
      context: "Data governance",
      hint: "data classification",
    },
    {
      id: "enterprise-19",
      jp: "マルチリージョン構成のリスクを評価します。",
      en: "We'll assess risks for the multi-region setup.",
      context: "Cloud architecture",
      hint: "multi-region setup",
    },
    {
      id: "enterprise-20",
      jp: "外部ベンダーのSLAを再確認します。",
      en: "We'll reconfirm the vendor SLA.",
      context: "Vendor management",
      hint: "vendor SLA",
    },
    {
      id: "enterprise-21",
      jp: "移行計画は段階的に実行します。",
      en: "We'll execute the migration in stages.",
      context: "Migration",
      hint: "in stages",
    },
    {
      id: "enterprise-22",
      jp: "今回の障害の影響範囲を特定します。",
      en: "We'll pinpoint the impact scope of this incident.",
      context: "Incident management",
      hint: "impact scope",
    },
    {
      id: "enterprise-23",
      jp: "APIのレート制限を再設計します。",
      en: "We'll redesign the API rate limits.",
      context: "API management",
      hint: "rate limits",
    },
    {
      id: "enterprise-24",
      jp: "認証基盤の統合方針を決めます。",
      en: "We'll decide the identity platform integration approach.",
      context: "Security architecture",
      hint: "integration approach",
    },
    {
      id: "enterprise-25",
      jp: "DR計画のRTO/RPOを見直します。",
      en: "We'll revisit the DR RTO and RPO targets.",
      context: "Business continuity",
      hint: "RTO and RPO",
    },
    {
      id: "enterprise-26",
      jp: "セキュリティ脆弱性の修正期限を設定します。",
      en: "We'll set remediation timelines for vulnerabilities.",
      context: "Security operations",
      hint: "remediation timelines",
    },
    {
      id: "enterprise-27",
      jp: "データパイプラインの監視を強化します。",
      en: "We'll strengthen monitoring for the data pipeline.",
      context: "Data engineering",
      hint: "monitoring",
    },
    {
      id: "enterprise-28",
      jp: "クラウドセキュリティのベースラインを策定します。",
      en: "We'll establish a cloud security baseline.",
      context: "Security compliance",
      hint: "security baseline",
    },
    {
      id: "enterprise-29",
      jp: "システム統合の依存関係を整理します。",
      en: "We'll map the dependencies for system integration.",
      context: "Architecture",
      hint: "map the dependencies",
    },
    {
      id: "enterprise-30",
      jp: "重要ワークロードのSLOを設定します。",
      en: "We'll define SLOs for critical workloads.",
      context: "Reliability",
      hint: "define SLOs",
    },
    {
      id: "enterprise-31",
      jp: "変更管理プロセスを更新します。",
      en: "We'll update the change management process.",
      context: "Governance",
      hint: "change management",
    },
    {
      id: "enterprise-32",
      jp: "APIゲートウェイの冗長構成を検討します。",
      en: "We'll evaluate redundant architecture for the API gateway.",
      context: "Cloud architecture",
      hint: "redundant architecture",
    },
    {
      id: "enterprise-33",
      jp: "本番環境へのアクセス制御を強化します。",
      en: "We'll tighten production access controls.",
      context: "Security",
      hint: "access controls",
    },
    {
      id: "enterprise-34",
      jp: "デプロイ頻度とリスクのバランスを取ります。",
      en: "We'll balance deployment frequency with risk.",
      context: "DevOps strategy",
      hint: "balance deployment frequency",
    },
    {
      id: "enterprise-35",
      jp: "ログ分析の精度を上げるためにタグ付けを統一します。",
      en: "We'll standardize tagging to improve log analytics accuracy.",
      context: "Observability",
      hint: "standardize tagging",
    },
    {
      id: "enterprise-36",
      jp: "外部APIの依存リスクを明確にします。",
      en: "We'll clarify the dependency risk on external APIs.",
      context: "Risk management",
      hint: "dependency risk",
    },
    {
      id: "enterprise-37",
      jp: "データ共有の権限を最小化します。",
      en: "We'll minimize data sharing permissions.",
      context: "Security governance",
      hint: "minimize permissions",
    },
    {
      id: "enterprise-38",
      jp: "クラウド契約の更新条件を確認します。",
      en: "We'll review renewal terms for the cloud contract.",
      context: "Vendor management",
      hint: "renewal terms",
    },
    {
      id: "enterprise-39",
      jp: "重要システムのバックアップ検証を定期化します。",
      en: "We'll schedule regular backup verification for critical systems.",
      context: "Resilience",
      hint: "backup verification",
    },
    {
      id: "enterprise-40",
      jp: "ネットワーク遅延の原因を特定します。",
      en: "We'll identify the root causes of network latency.",
      context: "Incident analysis",
      hint: "network latency",
    },
    {
      id: "enterprise-41",
      jp: "アーキテクチャレビューでリスクを洗い出します。",
      en: "We'll surface risks in the architecture review.",
      context: "Architecture review",
      hint: "surface risks",
    },
    {
      id: "enterprise-42",
      jp: "データ移行の検証計画を策定します。",
      en: "We'll define the data migration validation plan.",
      context: "Migration",
      hint: "validation plan",
    },
    {
      id: "enterprise-43",
      jp: "サービス停止時間を最小化する設計が必要です。",
      en: "We need a design that minimizes downtime.",
      context: "Reliability",
      hint: "minimizes downtime",
    },
    {
      id: "enterprise-44",
      jp: "セキュリティレビューの結果を反映します。",
      en: "We'll incorporate the security review findings.",
      context: "Security compliance",
      hint: "incorporate findings",
    },
    {
      id: "enterprise-45",
      jp: "本番環境のログをサンプル調査します。",
      en: "We'll sample production logs for analysis.",
      context: "Observability",
      hint: "sample production logs",
    },
    {
      id: "enterprise-46",
      jp: "データの所在を明確にしておきます。",
      en: "We'll clarify data residency.",
      context: "Compliance",
      hint: "data residency",
    },
    {
      id: "enterprise-47",
      jp: "APIのエラーレートを監視します。",
      en: "We'll monitor the API error rate.",
      context: "Reliability",
      hint: "error rate",
    },
    {
      id: "enterprise-48",
      jp: "クラウドプロバイダーの障害対応手順を確認します。",
      en: "We'll review the cloud provider's incident procedures.",
      context: "Vendor management",
      hint: "incident procedures",
    },
    {
      id: "enterprise-49",
      jp: "アクセスログの監査手順を整備します。",
      en: "We'll formalize the access log audit process.",
      context: "Security compliance",
      hint: "audit process",
    },
    {
      id: "enterprise-50",
      jp: "データ暗号化の方式を統一します。",
      en: "We'll standardize the data encryption approach.",
      context: "Security",
      hint: "encryption approach",
    },
    {
      id: "enterprise-51",
      jp: "新基盤のキャパシティ計画を見直します。",
      en: "We'll revisit capacity planning for the new platform.",
      context: "Infrastructure planning",
      hint: "capacity planning",
    },
    {
      id: "enterprise-52",
      jp: "影響評価の結果をもとに対応を決めます。",
      en: "We'll decide based on the impact assessment results.",
      context: "Decision making",
      hint: "impact assessment",
    },
    {
      id: "enterprise-53",
      jp: "クラウド費用の予測精度を上げます。",
      en: "We'll improve cloud cost forecasting accuracy.",
      context: "FinOps",
      hint: "cost forecasting",
    },
    {
      id: "enterprise-54",
      jp: "オンプレからクラウドへの接続方式を確定します。",
      en: "We'll finalize the connectivity model from on-prem to cloud.",
      context: "Hybrid architecture",
      hint: "connectivity model",
    },
    {
      id: "enterprise-55",
      jp: "監視アラートのノイズを減らします。",
      en: "We'll reduce alert noise in monitoring.",
      context: "Observability",
      hint: "alert noise",
    },
    {
      id: "enterprise-56",
      jp: "アクセス権限の棚卸しを実施します。",
      en: "We'll perform an access rights review.",
      context: "Security governance",
      hint: "access rights review",
    },
    {
      id: "enterprise-57",
      jp: "障害時のコミュニケーション手順を整理します。",
      en: "We'll refine the incident communication flow.",
      context: "Incident response",
      hint: "incident communication",
    },
    {
      id: "enterprise-58",
      jp: "データレイクの権限設計を見直します。",
      en: "We'll revisit access design for the data lake.",
      context: "Data governance",
      hint: "access design",
    },
    {
      id: "enterprise-59",
      jp: "APIの認証方式を統一します。",
      en: "We'll standardize API authentication.",
      context: "Security architecture",
      hint: "API authentication",
    },
    {
      id: "enterprise-60",
      jp: "障害の一次報告を経営層に上げます。",
      en: "We'll provide an initial incident report to leadership.",
      context: "Executive reporting",
      hint: "initial incident report",
    },
    {
      id: "enterprise-61",
      jp: "新しい監査要件に合わせてプロセスを更新します。",
      en: "We'll update the process to meet new audit requirements.",
      context: "Compliance",
      hint: "audit requirements",
    },
    {
      id: "enterprise-62",
      jp: "クラウド移行の依存関係を洗い出します。",
      en: "We'll map dependencies for the cloud migration.",
      context: "Migration",
      hint: "map dependencies",
    },
    {
      id: "enterprise-63",
      jp: "重大インシデントのエスカレーション基準を決めます。",
      en: "We'll define escalation criteria for major incidents.",
      context: "Incident management",
      hint: "escalation criteria",
    },
    {
      id: "enterprise-64",
      jp: "リリース後の影響監視計画を作成します。",
      en: "We'll create a post-release impact monitoring plan.",
      context: "Release management",
      hint: "post-release monitoring",
    },
    {
      id: "enterprise-65",
      jp: "データ品質のKPIを設定します。",
      en: "We'll define KPIs for data quality.",
      context: "Data governance",
      hint: "data quality KPIs",
    },
    {
      id: "enterprise-66",
      jp: "インフラ変更の承認フローを再設計します。",
      en: "We'll redesign the approval flow for infrastructure changes.",
      context: "Governance",
      hint: "approval flow",
    },
    {
      id: "enterprise-67",
      jp: "APIのバージョン管理方針を定めます。",
      en: "We'll define the API versioning policy.",
      context: "API management",
      hint: "versioning policy",
    },
    {
      id: "enterprise-68",
      jp: "クラウドサービスの利用規約を確認します。",
      en: "We'll review the cloud service terms of use.",
      context: "Compliance",
      hint: "terms of use",
    },
    {
      id: "enterprise-69",
      jp: "デプロイ前にセキュリティテストを実施します。",
      en: "We'll run security tests before deployment.",
      context: "Security testing",
      hint: "before deployment",
    },
    {
      id: "enterprise-70",
      jp: "障害復旧の手順書を更新します。",
      en: "We'll update the incident recovery runbook.",
      context: "Incident response",
      hint: "runbook",
    },
    {
      id: "enterprise-71",
      jp: "データ共有の契約条件を確認します。",
      en: "We'll confirm contractual terms for data sharing.",
      context: "Vendor management",
      hint: "data sharing terms",
    },
    {
      id: "enterprise-72",
      jp: "本番障害の原因を経営層に説明します。",
      en: "We'll explain the incident cause to leadership.",
      context: "Executive communication",
      hint: "incident cause",
    },
    {
      id: "enterprise-73",
      jp: "認証基盤の可用性を評価します。",
      en: "We'll assess availability of the identity platform.",
      context: "Reliability",
      hint: "assess availability",
    },
    {
      id: "enterprise-74",
      jp: "外部監査に備えてエビデンスを整備します。",
      en: "We'll prepare evidence for the external audit.",
      context: "Compliance",
      hint: "prepare evidence",
    },
    {
      id: "enterprise-75",
      jp: "データ移行時の整合性チェックを強化します。",
      en: "We'll strengthen integrity checks during data migration.",
      context: "Migration",
      hint: "integrity checks",
    },
    {
      id: "enterprise-76",
      jp: "重大インシデント時の報告基準を明文化します。",
      en: "We'll codify reporting thresholds for major incidents.",
      context: "Incident management",
      hint: "reporting thresholds",
    },
    {
      id: "enterprise-77",
      jp: "クラウド構成変更の影響を評価します。",
      en: "We'll assess the impact of cloud configuration changes.",
      context: "Change management",
      hint: "configuration changes",
    },
    {
      id: "enterprise-78",
      jp: "データアクセスの監査ログを確認します。",
      en: "We'll review audit logs for data access.",
      context: "Security compliance",
      hint: "audit logs",
    },
    {
      id: "enterprise-79",
      jp: "セキュリティ例外の期限を厳密に管理します。",
      en: "We'll strictly track expiration for security exceptions.",
      context: "Security governance",
      hint: "security exceptions",
    },
    {
      id: "enterprise-80",
      jp: "APIスロットリングの影響を評価します。",
      en: "We'll evaluate the impact of API throttling.",
      context: "API management",
      hint: "API throttling",
    },
    {
      id: "enterprise-81",
      jp: "ゼロトラスト方針に合わせて設計を見直します。",
      en: "We'll revise the design to align with zero-trust policy.",
      context: "Security architecture",
      hint: "zero-trust policy",
    },
    {
      id: "enterprise-82",
      jp: "クラウド移行の意思決定を経営層に提案します。",
      en: "We'll propose the cloud migration decision to leadership.",
      context: "Executive strategy",
      hint: "propose the decision",
    },
  ],
};

const defaultProgress = {
  totals: { total: 0, correct: 0, streak: 0 },
  levels: {
    daily: { total: 0, correct: 0 },
    business: { total: 0, correct: 0 },
    enterprise: { total: 0, correct: 0 },
  },
  cards: {},
};

const settingsDefaults = {
  name: "",
  focus: "balanced",
  reminder: false,
  ttsRate: "1",
  ttsLang: "en-US",
  ttsVoice: "auto",
};

const favoritesDefault = [];

const progress = storage.get("lexicore_progress", defaultProgress);
const settings = storage.get("lexicore_settings", settingsDefaults);
let favorites = new Set(storage.get("lexicore_favorites", favoritesDefault));

const state = {
  level: "daily",
  currentCard: null,
  quiz: {
    timer: null,
    timeLeft: 60,
    running: false,
    total: 0,
    correct: 0,
    level: "daily",
  },
};

const elements = {
  greeting: document.getElementById("user-greeting"),
  reminderBanner: document.getElementById("reminder-banner"),
  heroSentence: document.getElementById("hero-sentence"),
  heroTts: document.getElementById("hero-tts"),
  navLinks: document.querySelectorAll(".nav__link"),
  jumpButtons: document.querySelectorAll("[data-jump]"),
  levelSwitch: document.getElementById("level-switch"),
  cardLevel: document.getElementById("card-level"),
  cardContext: document.getElementById("card-context"),
  cardJp: document.getElementById("card-jp"),
  cardEn: document.getElementById("card-en"),
  cardHint: document.getElementById("card-hint"),
  cardAnswer: document.getElementById("card-answer"),
  revealButton: document.getElementById("reveal-answer"),
  markKnown: document.getElementById("mark-known"),
  markUnknown: document.getElementById("mark-unknown"),
  favoriteToggle: document.getElementById("favorite-toggle"),
  flashcardTts: document.getElementById("flashcard-tts"),
  flashTotal: document.getElementById("flash-total"),
  flashCorrect: document.getElementById("flash-correct"),
  flashStreak: document.getElementById("flash-streak"),
  quizLevel: document.getElementById("quiz-level"),
  startQuiz: document.getElementById("start-quiz"),
  quizArea: document.getElementById("quiz-area"),
  quizQuestion: document.getElementById("quiz-question"),
  quizOptions: document.getElementById("quiz-options"),
  quizTts: document.getElementById("quiz-tts"),
  quizTimer: document.getElementById("quiz-timer"),
  quizTotal: document.getElementById("quiz-total"),
  quizCorrect: document.getElementById("quiz-correct"),
  quizResult: document.getElementById("quiz-result"),
  resultTotal: document.getElementById("result-total"),
  resultCorrect: document.getElementById("result-correct"),
  resultAccuracy: document.getElementById("result-accuracy"),
  retryQuiz: document.getElementById("retry-quiz"),
  overallTotal: document.getElementById("overall-total"),
  overallCorrect: document.getElementById("overall-correct"),
  overallStreak: document.getElementById("overall-streak"),
  overallAccuracy: document.getElementById("overall-accuracy"),
  overallAccuracyText: document.getElementById("overall-accuracy-text"),
  levelProgress: document.getElementById("level-progress"),
  settingsForm: document.getElementById("settings-form"),
  settingsStatus: document.getElementById("settings-status"),
  userName: document.getElementById("user-name"),
  focusArea: document.getElementById("focus-area"),
  reminderOpt: document.getElementById("reminder-opt"),
  ttsRate: document.getElementById("tts-rate"),
  ttsLang: document.getElementById("tts-lang"),
  ttsVoice: document.getElementById("tts-voice"),
  ttsWarning: document.getElementById("tts-warning"),
};

const ttsState = {
  supported: "speechSynthesis" in window && "SpeechSynthesisUtterance" in window,
  voices: [],
  activeButton: null,
};

const updateGreeting = () => {
  const name = settings.name?.trim();
  elements.greeting.textContent = name ? `Welcome, ${name}` : "Welcome";
};

const updateReminder = () => {
  if (settings.reminder) {
    elements.reminderBanner.textContent =
      "Daily reminder: review 5 cards before your first meeting.";
    elements.reminderBanner.style.display = "block";
  } else {
    elements.reminderBanner.textContent = "";
    elements.reminderBanner.style.display = "none";
  }
};

const setTtsButtonState = (button, isSpeaking) => {
  if (!button) return;
  button.textContent = isSpeaking ? "停止" : "🤡";
  button.classList.toggle("is-speaking", isSpeaking);
  button.setAttribute("aria-pressed", isSpeaking ? "true" : "false");
};

const stopSpeech = () => {
  if (!ttsState.supported) return;
  speechSynthesis.cancel();
  if (ttsState.activeButton) {
    setTtsButtonState(ttsState.activeButton, false);
  }
  ttsState.activeButton = null;
};

const getSelectedVoice = () => {
  if (!ttsState.voices.length) return null;
  if (settings.ttsVoice && settings.ttsVoice !== "auto") {
    const selected = ttsState.voices.find((voice) => voice.name === settings.ttsVoice);
    if (selected) return selected;
  }
  const byLang = ttsState.voices.find((voice) => voice.lang === settings.ttsLang);
  return byLang || ttsState.voices[0];
};

const updateVoiceSelect = () => {
  if (!elements.ttsVoice) return;
  const voicesForLang = ttsState.voices.filter((voice) => voice.lang === settings.ttsLang);
  elements.ttsVoice.innerHTML = "";
  const autoOption = document.createElement("option");
  autoOption.value = "auto";
  autoOption.textContent = voicesForLang.length
    ? "Auto (recommended)"
    : "Auto (no English voice found)";
  elements.ttsVoice.appendChild(autoOption);
  voicesForLang.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = voice.name;
    elements.ttsVoice.appendChild(option);
  });
  const hasSelected = voicesForLang.some((voice) => voice.name === settings.ttsVoice);
  elements.ttsVoice.value = hasSelected ? settings.ttsVoice : "auto";
};

const loadVoices = () => {
  if (!ttsState.supported) return;
  ttsState.voices = speechSynthesis
    .getVoices()
    .filter((voice) => voice.lang && voice.lang.startsWith("en"));
  updateVoiceSelect();
};

const speakText = (text, button) => {
  if (!ttsState.supported || !text) return;
  if (ttsState.activeButton === button && speechSynthesis.speaking) {
    stopSpeech();
    return;
  }
  stopSpeech();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = Number(settings.ttsRate) || 1;
  utterance.lang = settings.ttsLang || "en-US";
  const selectedVoice = getSelectedVoice();
  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }
  ttsState.activeButton = button;
  setTtsButtonState(button, true);
  utterance.onend = () => {
    if (ttsState.activeButton === button) {
      setTtsButtonState(button, false);
      ttsState.activeButton = null;
    }
  };
  utterance.onerror = () => {
    if (ttsState.activeButton === button) {
      setTtsButtonState(button, false);
      ttsState.activeButton = null;
    }
  };
  speechSynthesis.speak(utterance);
};

const updateTtsSupportUI = () => {
  const supported = ttsState.supported;
  const buttons = [elements.flashcardTts, elements.quizTts, elements.heroTts];
  buttons.forEach((button) => {
    if (!button) return;
    if (!supported) button.disabled = true;
  });
  if (!supported) {
    elements.ttsWarning.textContent = "このブラウザは音声読み上げに対応していません。";
  } else {
    elements.ttsWarning.textContent = "";
  }
  elements.ttsRate.disabled = !supported;
  elements.ttsLang.disabled = !supported;
  elements.ttsVoice.disabled = !supported;
};

const updateSettingsForm = () => {
  elements.userName.value = settings.name || "";
  elements.focusArea.value = settings.focus || "balanced";
  elements.reminderOpt.checked = Boolean(settings.reminder);
  elements.ttsRate.value = settings.ttsRate || "1";
  elements.ttsLang.value = settings.ttsLang || "en-US";
  updateVoiceSelect();
  elements.settingsStatus.textContent = "Settings are up to date.";
};

const saveProgress = () => storage.set("lexicore_progress", progress);
const saveSettings = () => storage.set("lexicore_settings", settings);
const saveFavorites = () => storage.set("lexicore_favorites", Array.from(favorites));

const updateFlashcardStats = () => {
  elements.flashTotal.textContent = progress.totals.total;
  elements.flashCorrect.textContent = progress.totals.correct;
  elements.flashStreak.textContent = progress.totals.streak;
};

const updateProgressUI = () => {
  elements.overallTotal.textContent = progress.totals.total;
  elements.overallCorrect.textContent = progress.totals.correct;
  elements.overallStreak.textContent = progress.totals.streak;
  const accuracy = progress.totals.total
    ? Math.round((progress.totals.correct / progress.totals.total) * 100)
    : 0;
  elements.overallAccuracy.style.width = `${accuracy}%`;
  elements.overallAccuracyText.textContent = `Accuracy ${accuracy}%`;

  elements.levelProgress.innerHTML = "";
  Object.entries(progress.levels).forEach(([level, stats]) => {
    const levelName =
      level === "daily"
        ? "Level 1: Daily"
        : level === "business"
          ? "Level 2: Business"
          : "Level 3: Enterprise & IT";
    const levelAccuracy = stats.total
      ? Math.round((stats.correct / stats.total) * 100)
      : 0;
    const row = document.createElement("div");
    row.className = "level-row";
    row.innerHTML = `
      <div class="level-row__header">
        <span>${levelName}</span>
        <span>${levelAccuracy}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-bar__fill" style="width: ${levelAccuracy}%"></div>
      </div>
      <div class="level-row__stats">${stats.correct} correct / ${stats.total} answers</div>
    `;
    elements.levelProgress.appendChild(row);
  });
};

const getCardStats = (cardId) => {
  if (!progress.cards[cardId]) {
    progress.cards[cardId] = { correct: 0, wrong: 0, seen: 0, lastSeen: null };
  }
  return progress.cards[cardId];
};

const getWeightedCard = (level) => {
  const cards = dataSets[level];
  const weights = cards.map((card) => {
    const stats = getCardStats(card.id);
    const mastery = stats.correct - stats.wrong;
    const favoriteBoost = favorites.has(card.id) ? 2 : 0;
    return Math.max(1, 6 - mastery + favoriteBoost);
  });
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  let pick = Math.random() * totalWeight;
  for (let i = 0; i < cards.length; i += 1) {
    pick -= weights[i];
    if (pick <= 0) return cards[i];
  }
  return cards[0];
};

const renderCard = (card) => {
  stopSpeech();
  state.currentCard = card;
  elements.cardLevel.textContent =
    state.level === "daily"
      ? "Level 1: Daily"
      : state.level === "business"
        ? "Level 2: Business"
        : "Level 3: Enterprise & IT";
  elements.cardContext.textContent = card.context;
  elements.cardJp.textContent = card.jp;
  elements.cardEn.textContent = card.en;
  elements.cardHint.textContent = card.hint;
  elements.cardAnswer.classList.add("hidden");
  elements.cardAnswer.setAttribute("aria-hidden", "true");
  elements.revealButton.disabled = false;
  elements.flashcardTts.disabled = true;
  const favoriteLabel = favorites.has(card.id) ? "★ お気に入り" : "☆ お気に入り";
  elements.favoriteToggle.textContent = favoriteLabel;
};

const recordAnswer = (isCorrect) => {
  const card = state.currentCard;
  if (!card) return;
  const stats = getCardStats(card.id);
  stats.seen += 1;
  stats.lastSeen = new Date().toISOString();
  if (isCorrect) {
    stats.correct += 1;
    progress.totals.correct += 1;
    progress.totals.streak += 1;
    progress.levels[state.level].correct += 1;
  } else {
    stats.wrong += 1;
    progress.totals.streak = 0;
  }
  progress.totals.total += 1;
  progress.levels[state.level].total += 1;
  saveProgress();
  updateFlashcardStats();
  updateProgressUI();
};

const showNextCard = () => {
  const nextCard = getWeightedCard(state.level);
  renderCard(nextCard);
};

const setLevel = (level) => {
  state.level = level;
  document.querySelectorAll(".pill").forEach((button) => {
    button.classList.toggle("active", button.dataset.level === level);
  });
  showNextCard();
};

const revealAnswer = () => {
  elements.cardAnswer.classList.remove("hidden");
  elements.cardAnswer.setAttribute("aria-hidden", "false");
  elements.revealButton.disabled = true;
  elements.flashcardTts.disabled = !ttsState.supported;
};

const toggleFavorite = () => {
  const card = state.currentCard;
  if (!card) return;
  if (favorites.has(card.id)) {
    favorites.delete(card.id);
  } else {
    favorites.add(card.id);
  }
  saveFavorites();
  renderCard(card);
};

const buildQuizQuestion = () => {
  const cards = dataSets[state.quiz.level];
  const question = cards[Math.floor(Math.random() * cards.length)];
  const options = [question.en];
  while (options.length < 4) {
    const candidate = cards[Math.floor(Math.random() * cards.length)].en;
    if (!options.includes(candidate)) options.push(candidate);
  }
  return { question, options: options.sort(() => Math.random() - 0.5) };
};

const renderQuizQuestion = () => {
  stopSpeech();
  const { question, options } = buildQuizQuestion();
  state.quiz.currentQuestion = question;
  elements.quizQuestion.textContent = question.jp;
  elements.quizOptions.innerHTML = "";
  elements.quizTts.disabled = !ttsState.supported;
  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.textContent = option;
    button.addEventListener("click", () => handleQuizAnswer(option));
    elements.quizOptions.appendChild(button);
  });
};

const updateQuizStats = () => {
  elements.quizTimer.textContent = state.quiz.timeLeft;
  elements.quizTotal.textContent = state.quiz.total;
  elements.quizCorrect.textContent = state.quiz.correct;
};

const stopQuiz = () => {
  clearInterval(state.quiz.timer);
  state.quiz.running = false;
  elements.quizResult.classList.remove("hidden");
  elements.quizTts.disabled = true;
  const accuracy = state.quiz.total
    ? Math.round((state.quiz.correct / state.quiz.total) * 100)
    : 0;
  elements.resultTotal.textContent = state.quiz.total;
  elements.resultCorrect.textContent = state.quiz.correct;
  elements.resultAccuracy.textContent = `${accuracy}%`;
};

const handleQuizAnswer = (answer) => {
  if (!state.quiz.running) return;
  const isCorrect = answer === state.quiz.currentQuestion.en;
  state.quiz.total += 1;
  if (isCorrect) state.quiz.correct += 1;
  progress.totals.total += 1;
  progress.levels[state.quiz.level].total += 1;
  if (isCorrect) {
    progress.totals.correct += 1;
    progress.levels[state.quiz.level].correct += 1;
    progress.totals.streak += 1;
  } else {
    progress.totals.streak = 0;
  }
  saveProgress();
  updateProgressUI();
  updateQuizStats();
  renderQuizQuestion();
};

const startQuiz = () => {
  stopSpeech();
  state.quiz.level = elements.quizLevel.value;
  state.quiz.running = true;
  state.quiz.timeLeft = 60;
  state.quiz.total = 0;
  state.quiz.correct = 0;
  elements.quizResult.classList.add("hidden");
  updateQuizStats();
  renderQuizQuestion();
  clearInterval(state.quiz.timer);
  state.quiz.timer = setInterval(() => {
    state.quiz.timeLeft -= 1;
    updateQuizStats();
    if (state.quiz.timeLeft <= 0) {
      stopQuiz();
    }
  }, 1000);
};

const restartQuiz = () => {
  stopQuiz();
  startQuiz();
};

const handleSettingsSubmit = (event) => {
  event.preventDefault();
  settings.name = elements.userName.value.trim();
  settings.focus = elements.focusArea.value;
  settings.reminder = elements.reminderOpt.checked;
  settings.ttsRate = elements.ttsRate.value;
  settings.ttsLang = elements.ttsLang.value;
  settings.ttsVoice = elements.ttsVoice.value;
  saveSettings();
  updateGreeting();
  updateReminder();
  updateVoiceSelect();
  elements.settingsStatus.textContent = "Settings saved.";
};

const setupNavigation = () => {
  elements.navLinks.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.target);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
  elements.jumpButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.jump);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
};

const init = () => {
  updateGreeting();
  updateReminder();
  updateSettingsForm();
  updateTtsSupportUI();
  if (ttsState.supported) {
    loadVoices();
    speechSynthesis.addEventListener("voiceschanged", loadVoices);
  }
  updateFlashcardStats();
  updateProgressUI();
  setupNavigation();
  setLevel(state.level);
  elements.revealButton.addEventListener("click", revealAnswer);
  elements.flashcardTts.addEventListener("click", () => {
    speakText(elements.cardEn.textContent, elements.flashcardTts);
  });
  elements.markKnown.addEventListener("click", () => {
    recordAnswer(true);
    showNextCard();
  });
  elements.markUnknown.addEventListener("click", () => {
    recordAnswer(false);
    showNextCard();
  });
  elements.favoriteToggle.addEventListener("click", toggleFavorite);
  elements.levelSwitch.addEventListener("click", (event) => {
    const level = event.target.dataset.level;
    if (level) setLevel(level);
  });
  elements.startQuiz.addEventListener("click", startQuiz);
  elements.quizTts.addEventListener("click", () => {
    speakText(state.quiz.currentQuestion?.en, elements.quizTts);
  });
  elements.heroTts.addEventListener("click", () => {
    speakText(elements.heroSentence.textContent, elements.heroTts);
  });
  elements.retryQuiz.addEventListener("click", restartQuiz);
  elements.settingsForm.addEventListener("submit", handleSettingsSubmit);
  elements.ttsLang.addEventListener("change", () => {
    settings.ttsLang = elements.ttsLang.value;
    updateVoiceSelect();
    saveSettings();
  });
  elements.ttsRate.addEventListener("change", () => {
    settings.ttsRate = elements.ttsRate.value;
    saveSettings();
  });
  elements.ttsVoice.addEventListener("change", () => {
    settings.ttsVoice = elements.ttsVoice.value;
    saveSettings();
  });
};

init();
