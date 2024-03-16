const verbs = [
    "ate",
    "stepped on",
    "gave away",
    "slipped on",
    "ran into",
    "fell off",
    "jumped over",
    "drove through",
    "swam across",
    "flew over",
    "walked into",
    "climbed up",
    "sat on",
    "stood under",
    "shouted at",
    "listened to",
    "watched out for",
    "looked into",
    "talked about",
    "smiled at",
    "laughed about",
    "cried over",
    "thought about",
    "dreamed of",
    "played with",
    "waited for",
    "wrote about",
    "read through",
    "asked for",
    "answered to",
    "agreed with",
    "disagreed with",
    "argued over",
    "discussed with",
    "competed against",
    "compared to",
    "decided on",
    "voted for",
    "worried about",
    "hoped for",
    "prayed for",
    "wished for",
    "looked for",
    "searched for",
    "found out",
    "figured out",
    "solved for",
    "believed in",
    "trusted in",
    "relied on",
    "counted on",
    "looked up",
    "gazed upon",
    "saw through",
    "heard from",
    "told about",
    "informed about",
    "notified of",
    "reminded of",
    "called up",
    "texted about",
    "emailed about",
    "chatted with",
    "talked to",
    "spoke with",
    "conversed with",
    "communicated with",
    "met with",
    "encountered with",
    "associated with",
    "connected with",
    "linked to",
    "related to",
    "referred to",
    "belonged to",
    "contained in",
    "consisted of",
    "existed in",
    "resulted in",
    "led to",
    "contributed to",
    "caused by",
    "affected by",
    "influenced by",
    "inspired by",
    "motivated by",
    "interested in",
    "entertained by",
    "captivated by",
    "fascinated by",
    "intrigued by",
    "amazed by",
    "impressed by",
    "shocked by",
    "surprised by",
    "disappointed by",
    "pleased by",
    "satisfied with",
    "content with",
    "happy about",
    "glad about",
    "excited about",
    "thrilled about",
    "anxious about",
    "nervous about",
    "scared of",
    "afraid of",
    "terrified of",
    "panicked about",
    "worried sick about",
    "bothered by",
    "annoyed by",
    "irritated by",
    "frustrated by",
    "angered by",
    "enraged by",
    "provoked by",
    "offended by",
    "hurt by",
    "damaged by",
    "destroyed by",
    "ruined by",
    "spoiled by",
    "impaired by",
    "compromised by",
    "affected by",
    "influenced by",
    "transformed by",
    "changed by",
    "altered by",
    "modified by",
    "adjusted by",
    "adapted to",
    "accommodated to",
    "suited to",
    "fitted to",
    "matched with",
    "paired with",
    "combined with",
    "integrated with",
    "merged with",
    "blended with",
    "mixed with",
    "mingled with",
    "intermixed with",
    "interacted with",
    "interfered with",
    "interposed with",
    "intercepted by",
    "interrupted by",
    "interfered by",
    "interacted by",
    "interlocked with",
    "interconnected with",
    "interrelated with",
    "interwoven with",
    "interlaced with",
    "interlarded with",
    "interspersed with",
    "intertwined with",
    "intermingled with",
    "intervened with",
    "investigated by",
    "inspected by",
    "examined by",
    "explored by",
    "surveyed by",
    "scrutinized by",
    "studied by",
    "researched by",
    "analyzed by",
    "assessed by",
    "evaluated by",
    "judged by",
    "measured by",
    "weighed by",
    "calculated by",
    "estimated by",
    "rated by",
    "ranked by",
    "compared by",
    "contrasted by",
    "differentiated by",
    "distinguished by",
    "separated by",
    "divided by",
    "subdivided by",
    "classified by",
    "categorized by",
    "sorted by",
    "grouped by",
    "clustered by",
    "organized by",
    "arranged by",
    "ordered by",
    "ranked by",
    "prioritized by",
    "categorized by",
    "classified by",
    "grouped by",
    "organized by",
    "structured by",
    "systematized by",
    "formatted by",
    "standardized by",
    "regulated by",
    "controlled by",
    "governed by",
    "dominated by",
    "influenced by",
    "guided by",
    "led by",
    "motivated by",
    "driven by",
    "determined by",
    "defined by",
    "dictated by",
    "prescribed by",
    "recommended by",
    "advised by",
    "suggested by",
    "offered by",
    "presented by",
    "proposed by",
    "submitted by",
    "introduced by",
    "brought up by",
    "raised by",
    "started by",
    "initiated by",
    "commenced by",
    "begun by",
    "initiated by",
    "instigated by",
    "engaged by",
    "involved by",
    "participated by",
    "joined by",
    "associated by",
    "connected by",
    "bonded by",
    "united by",
    "linked by",
    "related by",
    "tied by",
    "knotted by",
    "attached by",
    "bound by",
    "chained by",
    "secured by",
    "fastened by",
    "tethered by",
    "fettered by",
    "restricted by",
    "constrained by",
    "limited by",
    "bound by",
    "tied by",
    "connected by",
    "linked by",
    "united by",
    "associated by",
    "joined by",
    "related by",
    "matched by",
    "paired by",
    "combined by",
    "mixed by",
    "blended by",
    "integrated by",
    "fused by",
    "merged by",
    "coalesced by",
    "harmonized by",
    "synchronized by",
    "aligned by",
    "matched by",
    "adapted by",
    "adjusted by",
    "coordinated by",
    "organized by",
    "managed by",
    "controlled by",
    "regulated by",
    "governed by",
    "monitored by",
    "supervised by",
    "administered by",
    "directed by",
    "guided by",
    "instructed by",
    "led by",
    "managed by",
    "handled by",
    "dealt with",
    "coped with",
    "treated with",
    "addressed with",
    "responded to",
    "reacted to",
    "handled with",
    "dealt with",
    "managed with",
    "controlled with",
    "overcome with",
    "surmounted by",
    "mastered by",
    "conquered by",
    "defeated by",
    "vanquished by",
    "triumphed over",
    "overpowered by",
    "dominated by",
    "subdued by",
    "repressed by",
    "suppressed by",
    "restrained by",
    "controlled by",
    "governed by",
    "constrained by",
    "limited by",
    "bound by",
    "restricted by",
    "curbed by",
    "contained by",
    "restrained by",
    "tamed by",
    "subjugated by",
    "humbled by",
    "humiliated by",
    "embarrassed by",
    "ashamed of",
    "guilt-ridden by",
    "remorseful for",
    "sorry for",
    "apologetic for",
    "forgiven for",
    "pardoned for",
    "excused for",
    "justified by",
    "explained by",
    "clarified by",
    "elucidated by",
    "illuminated by",
    "shed light on",
    "shed insight on",
    "revealed by",
    "unveiled by",
    "exposed by",
    "uncovered by",
    "disclosed by",
    "unearthed by",
    "discovered by",
    "explored by",
    "examined by",
    "investigated by",
    "scrutinized by",
    "analyzed by",
    "interpreted by",
    "understood by",
    "comprehended by",
    "assimilated by",
    "grasped by",
    "apprehended by",
    "perceived by",
    "recognized by",
    "identified by",
    "distinguished by",
    "differentiated by",
    "classified by",
    "categorized by",
    "sorted by",
    "grouped by",
    "organized by",
    "arranged by",
    "ordered by",
    "prioritized by",
    "structured by",
    "systematized by",
    "formatted by",
    "standardized by",
    "regulated by",
    "controlled by",
    "governed by",
    "dictated by",
    "prescribed by",
    "recommended by",
    "advised by",
    "suggested by",
    "offered by",
    "presented by",
    "proposed by",
    "submitted by",
    "introduced by",
    "brought up by",
    "raised by",
    "started by",
    "initiated by",
    "commenced by",
    "begun by",
    "initiated by",
    "instigated by",
    "engaged by",
    "involved by",
    "participated by",
    "joined by",
    "associated by",
    "connected by",
    "bonded by",
    "united by",
    "linked by",
    "related by",
    "tied by",
    "knotted by",
    "attached by",
    "bound by",
    "chained by",
    "secured by",
    "fastened by",
    "tethered by",
    "fettered by",
    "restricted by",
    "constrained by",
    "limited by",
    "bound by",
    "tied by",
    "connected by",
    "linked by",
    "united by",
    "associated by",
    "joined by",
    "related by",
    "matched by",
    "paired by",
    "combined by",
    "mixed by",
    "blended by",
    "integrated by",
    "fused by",
    "merged by",
    "coalesced by",
    "harmonized by",
    "synchronized by",
    "aligned by",
    "matched by",
    "adapted by",
    "adjusted by",
    "coordinated by",
    "organized by",
    "managed by",
    "controlled by",
    "regulated by",
    "governed by",
    "monitored by",
    "supervised by",
    "administered by",
    "directed by",
    "guided by",
    "instructed by",
    "led by",
    "managed by",
    "handled by",
    "dealt with",
    "coped with",
    "treated with",
    "addressed with",
    "responded to",
    "reacted to",
    "handled with",
    "dealt with",
    "managed with",
    "controlled with",
    "overcome with",
    "surmounted by",
    "mastered by",
    "conquered by",
    "defeated by",
    "vanquished by",
    "triumphed over",
    "overpowered by",
    "dominated by",
    "subdued by",
    "repressed by",
    "suppressed by",
    "restrained by",
    "controlled by",
    "governed by",
    "constrained by",
    "limited by",
    "bound by",
    "restricted by",
    "curbed by",
    "contained by",
    "restrained by",
    "tamed by",
    "subjugated by",
    "humbled by",
    "humiliated by",
    "embarrassed by",
    "ashamed of",
    "guilt-ridden by",
    "remorseful for",
    "sorry for",
    "apologetic for",
    "forgiven for",
    "pardoned for",
    "excused for",
    "justified by",
    "explained by",
    "clarified by",
    "elucidated by",
    "illuminated by",
    "shed light on",
    "shed insight on",
    "revealed by",
    "unveiled by",
    "exposed by"
];

module.exports = verbs;