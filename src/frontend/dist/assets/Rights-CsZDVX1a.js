import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, a as cn, b as Scale } from "./index-DNNoM-aw.js";
import { a as Badge, C as Card, c as CardContent, B as Button } from "./card-CVExSVy-.js";
import { P as Primitive, a as ChevronRight, C as CircleCheck } from "./index-BOfbUWa3.js";
import { M as MotionConfigContext, i as isHTMLElement, c as useConstant, P as PresenceContext, d as usePresence, e as useIsomorphicLayoutEffect, L as LayoutGroupContext, m as motion } from "./use-mock-data-CfaPjUjY.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$7 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$7);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$6);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const ShieldCheck = createLucideIcon("shield-check", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
];
const UserCheck = createLucideIcon("user-check", __iconNode);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}
class PopChildMeasure extends reactExports.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (isHTMLElement(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
      const parent = element.offsetParent;
      const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
      const parentHeight = isHTMLElement(parent) ? parent.offsetHeight || 0 : 0;
      const computedStyle = getComputedStyle(element);
      const size = this.props.sizeRef.current;
      size.height = parseFloat(computedStyle.height);
      size.width = parseFloat(computedStyle.width);
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
      size.right = parentWidth - size.width - size.left;
      size.bottom = parentHeight - size.height - size.top;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
  var _a;
  const id = reactExports.useId();
  const ref = reactExports.useRef(null);
  const size = reactExports.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  });
  const { nonce } = reactExports.useContext(MotionConfigContext);
  const childRef = ((_a = children.props) == null ? void 0 : _a.ref) ?? (children == null ? void 0 : children.ref);
  const composedRef = useComposedRefs(ref, childRef);
  reactExports.useInsertionEffect(() => {
    const { width, height, top, left, right, bottom } = size.current;
    if (isPresent || pop === false || !ref.current || !width || !height)
      return;
    const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
    const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
    ref.current.dataset.motionPopId = id;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    const parent = root ?? document.head;
    parent.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
    }
    return () => {
      var _a2;
      (_a2 = ref.current) == null ? void 0 : _a2.removeAttribute("data-motion-pop-id");
      if (parent.contains(style)) {
        parent.removeChild(style);
      }
    };
  }, [isPresent]);
  return jsxRuntimeExports.jsx(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, pop, children: pop === false ? children : reactExports.cloneElement(children, { ref: composedRef }) });
}
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id = reactExports.useId();
  let isReusedContext = true;
  let context = reactExports.useMemo(() => {
    isReusedContext = false;
    return {
      id,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    };
  }, [isPresent, presenceChildren, onExitComplete]);
  if (presenceAffectsLayout && isReusedContext) {
    context = { ...context };
  }
  reactExports.useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  reactExports.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  children = jsxRuntimeExports.jsx(PopChild, { pop: mode === "popLayout", isPresent, anchorX, anchorY, root, children });
  return jsxRuntimeExports.jsx(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
const getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  reactExports.Children.forEach(children, (child) => {
    if (reactExports.isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = reactExports.useMemo(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = reactExports.useRef(true);
  const pendingPresentChildren = reactExports.useRef(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const exitingComponents = reactExports.useRef(/* @__PURE__ */ new Set());
  const [diffedChildren, setDiffedChildren] = reactExports.useState(presentChildren);
  const [renderedChildren, setRenderedChildren] = reactExports.useState(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
        exitingComponents.current.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return null;
  }
  const { forceRender } = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitingComponents.current.has(key)) {
        return;
      }
      if (exitComplete.has(key)) {
        exitingComponents.current.add(key);
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender == null ? void 0 : forceRender();
        setRenderedChildren(pendingPresentChildren.current);
        propagate && (safeToRemove == null ? void 0 : safeToRemove());
        onExitComplete && onExitComplete();
      }
    };
    return jsxRuntimeExports.jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, anchorY, children: child }, key);
  }) });
};
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator$1.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator$1;
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
const AGG_QUESTIONS = [
  {
    id: 1n,
    question: "Were you treated differently because of your nationality or ethnic origin?",
    hint: "This includes hostile comments, being excluded from meetings, or different rules applied to you vs. German colleagues.",
    options: [
      "Yes, this clearly happened",
      "I think so, but I'm not sure",
      "No, this has not happened",
      "I'd prefer not to say"
    ]
  },
  {
    id: 2n,
    question: "Have you experienced wage discrimination compared to colleagues doing the same work?",
    hint: "For example, being paid less than a German colleague with similar experience, role, and qualifications.",
    options: [
      "Yes, this clearly happened",
      "I think so, but I'm not sure",
      "No, this has not happened",
      "I'd prefer not to say"
    ]
  },
  {
    id: 3n,
    question: "Were you denied a job, promotion, or opportunity due to pregnancy, gender, or family plans?",
    hint: "Including remarks about maternity leave, not being hired because you might get pregnant, or being passed over for a promotion.",
    options: [
      "Yes, this clearly happened",
      "I think so, but I'm not sure",
      "No, this has not happened",
      "I'd prefer not to say"
    ]
  },
  {
    id: 4n,
    question: "Have you been harassed, excluded, or made to feel unwelcome in a professional setting?",
    hint: "Including hostile comments, isolation, bullying, offensive jokes, or any form of sexual harassment at work.",
    options: [
      "Yes, this clearly happened",
      "I think so, but I'm not sure",
      "No, this has not happened",
      "I'd prefer not to say"
    ]
  }
];
const LEGAL_AID_ORGS = [
  {
    name: "Antidiskriminierungsstelle des Bundes",
    description: "Germany's Federal Anti-Discrimination Agency. Offers free counseling, mediation support, and legal information for discrimination cases of all kinds.",
    url: "https://www.antidiskriminierungsstelle.de",
    icon: "⚖️",
    tag: "Federal Agency"
  },
  {
    name: "BMFSFJ — Women's Helpline",
    description: "Free 24/7 helpline (08000 116 016) in multiple languages. For women in difficult, dangerous, or vulnerable situations — no case is too small.",
    url: "https://www.hilfetelefon.de",
    icon: "📞",
    tag: "24/7 Helpline"
  },
  {
    name: "Terre des Femmes",
    description: "Women's rights organization with a focus on migrant women. Provides legal advice, referral networks, and support for gender-based violence.",
    url: "https://www.frauenrechte.de",
    icon: "🌍",
    tag: "Women's Rights"
  },
  {
    name: "Make it in Germany — Work Rights",
    description: "Official government resource with clear guidance on employment rights, equal pay, and workplace protections for international skilled workers.",
    url: "https://www.make-it-in-germany.com/en/living-in-germany/rights",
    icon: "🇩🇪",
    tag: "Official Guide"
  }
];
function buildResults(answers) {
  const results = [];
  const isAffirmative = (ans) => ans === "Yes, this clearly happened" || ans === "I think so, but I'm not sure";
  if (isAffirmative(answers[0])) {
    results.push({
      violationType: "Ethnic & National Origin Discrimination",
      summary: "You may have experienced discrimination based on your ethnic or national origin. The AGG protects all employees from unequal treatment in hiring, promotion, pay, and working conditions based on ethnicity or nationality. You have the right to file a formal complaint.",
      legalBasis: "AGG § 1, § 3, § 7 — Prohibition of unequal treatment based on ethnic origin",
      contactInfo: "Contact the Antidiskriminierungsstelle des Bundes for a free consultation. You have 2 months from the incident to claim compensation."
    });
  }
  if (isAffirmative(answers[1])) {
    results.push({
      violationType: "Wage Discrimination",
      summary: "If you are paid less than comparable colleagues for equal work without objective justification, this may violate both the AGG and the Entgelttransparenzgesetz. You have the right to request anonymized pay comparisons from your employer.",
      legalBasis: "AGG § 8, § 10 — Equal pay provisions; EntgTranspG § 10 — Right to pay transparency",
      contactInfo: "The Federal Anti-Discrimination Agency can advise you on formally requesting pay transparency and next steps if your employer refuses."
    });
  }
  if (isAffirmative(answers[2])) {
    results.push({
      violationType: "Gender & Pregnancy Discrimination",
      summary: "Discrimination related to pregnancy, parental leave, or gender is strictly prohibited in Germany. Employers may not reject candidates or deny promotions due to pregnancy. Dismissal during maternity protection is forbidden by law.",
      legalBasis: "AGG § 1, § 3 — Prohibition of gender discrimination; MuSchG § 17 — Dismissal ban during pregnancy and maternity leave",
      contactInfo: "BMFSFJ Women's Helpline: 08000 116 016 (free, 24/7, multilingual). Also contact the Antidiskriminierungsstelle for formal complaint guidance."
    });
  }
  if (isAffirmative(answers[3])) {
    results.push({
      violationType: "Workplace Harassment & Hostile Environment",
      summary: "Harassment — including hostile comments, exclusion, bullying, or sexual harassment — constitutes discrimination under the AGG. Your employer has a legal duty to protect you and must take immediate action when notified. You can also report directly to the ADS.",
      legalBasis: "AGG § 13 — Right to lodge complaints; AGG § 12 — Employer's duty of protection and preventive measures",
      contactInfo: "Reach out to Terre des Femmes or the ADS for confidential counseling. Document all incidents with dates, witnesses, and context."
    });
  }
  if (results.length === 0) {
    results.push({
      violationType: "Your Rights at a Glance",
      summary: "Based on your answers, no specific AGG violations were flagged — but every woman in Germany deserves to know her rights. German law provides strong protections against discrimination, harassment, and unequal pay in the workplace.",
      legalBasis: "AGG — Allgemeines Gleichbehandlungsgesetz (General Equal Treatment Act, 2006)",
      contactInfo: "The Antidiskriminierungsstelle des Bundes offers free, confidential advice to anyone who wants to learn more about their rights — even if you haven't experienced discrimination."
    });
  }
  return results;
}
function ProgressBar({ current, total }) {
  const pct = Math.round((current + 1) / total * 100);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-body-sm text-muted-foreground mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Question ",
        current + 1,
        " of ",
        total
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        pct,
        "% complete"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "progressbar",
        "aria-valuenow": pct,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": "Quiz progress",
        tabIndex: -1,
        className: "h-2 bg-muted rounded-full overflow-hidden",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "h-full bg-primary rounded-full",
            initial: { width: 0 },
            animate: { width: `${pct}%` },
            transition: { duration: 0.5, ease: "easeOut" }
          }
        )
      }
    )
  ] });
}
function QuestionStep({
  question,
  hint,
  options,
  stepIndex,
  totalSteps,
  selected,
  onSelect,
  onNext,
  onBack
}) {
  const isLast = stepIndex === totalSteps - 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, x: 32 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -32 },
      transition: { duration: 0.3, ease: "easeOut" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "border border-border shadow-subtle",
          "data-ocid": "rights.quiz.card",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { current: stepIndex, total: totalSteps }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold font-display", children: stepIndex + 1 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-display-md text-foreground pt-1 leading-snug", children: question })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-sm text-muted-foreground pl-12", children: hint })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "space-y-3 pl-12",
                role: "radiogroup",
                "aria-label": question,
                "data-ocid": "rights.options.list",
                children: options.map((opt, idx) => {
                  const isSelected = selected === opt;
                  const inputId = `rights-q-${stepIndex}-option-${idx}`;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      htmlFor: inputId,
                      className: [
                        "w-full text-left px-4 py-3 rounded-xl border transition-smooth flex items-center gap-3 group cursor-pointer focus-within:ring-2 focus-within:ring-ring",
                        isSelected ? "border-primary bg-primary/8 text-foreground" : "border-border bg-card hover:border-primary/40 hover:bg-muted/40 text-foreground"
                      ].join(" "),
                      "data-ocid": `rights.option.${idx + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "input",
                          {
                            type: "radio",
                            id: inputId,
                            name: `question-${stepIndex}`,
                            value: opt,
                            checked: isSelected,
                            onChange: () => onSelect(opt),
                            className: "sr-only"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: [
                              "w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-smooth",
                              isSelected ? "border-primary bg-primary" : "border-muted-foreground/40 group-hover:border-primary/60"
                            ].join(" "),
                            "aria-hidden": "true",
                            children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary-foreground" })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-body-md", children: opt })
                      ]
                    },
                    opt
                  );
                })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-12 flex items-center gap-3 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  onClick: onBack,
                  disabled: stepIndex === 0,
                  "data-ocid": "rights.back_button",
                  className: "gap-1.5",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-4 h-4" }),
                    "Back"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: onNext,
                  disabled: !selected,
                  "data-ocid": "rights.next_button",
                  className: "gap-1.5",
                  children: [
                    isLast ? "See My Results" : "Next Question",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4" })
                  ]
                }
              )
            ] })
          ] })
        }
      )
    },
    stepIndex
  );
}
function ResultsSection({
  answers,
  onStartOver
}) {
  const results = buildResults(answers);
  const hasViolations = results.some(
    (r) => r.violationType !== "Your Rights at a Glance"
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.45, ease: "easeOut" },
      className: "space-y-8",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border border-border shadow-subtle overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `px-8 py-6 ${hasViolations ? "bg-primary/6" : "bg-muted/40"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${hasViolations ? "bg-primary/15 text-primary" : "bg-muted/80 text-muted-foreground"}`,
                  children: hasViolations ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-6 h-6" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "text-display-md text-foreground",
                    "data-ocid": "rights.results_section",
                    children: hasViolations ? "Potential Rights Violations Identified" : "Your Rights Are Protected"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-md text-muted-foreground mt-1 max-w-xl", children: hasViolations ? "Based on your answers, you may have experienced one or more violations under German law. You are not alone — confidential help is available to you." : "No specific violations were flagged. The resources below will help you stay informed about your rights in Germany." })
              ] })
            ] })
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "rights.violations_list", children: results.map((result, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 14 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: idx * 0.1, duration: 0.38 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Card,
              {
                className: "border border-border shadow-subtle",
                "data-ocid": `rights.violation.${idx + 1}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 flex-wrap", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display-md text-foreground", children: result.violationType }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs flex-shrink-0", children: "AGG Protected" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-md text-foreground/80 leading-relaxed", children: result.summary }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted/60 px-4 py-3 space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-body-sm font-semibold text-primary", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }),
                      "Legal Basis"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-sm text-muted-foreground", children: result.legalBasis })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-primary/5 border border-primary/15 px-4 py-3 space-y-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-body-sm font-semibold text-primary", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4" }),
                      "What You Can Do"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-sm text-foreground/80", children: result.contactInfo })
                  ] })
                ] })
              }
            )
          },
          result.violationType
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "w-5 h-5 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display-md text-foreground", children: "Free Legal Support in Germany" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-md text-muted-foreground", children: "These organizations offer free, confidential advice. You don't need to have a clear case to reach out — they are here to listen and guide you without judgment." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
              "data-ocid": "rights.legal_aid_list",
              children: LEGAL_AID_ORGS.map((org, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.25 + idx * 0.08, duration: 0.35 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Card,
                    {
                      className: "border border-border shadow-subtle h-full transition-smooth hover:border-primary/30 hover:shadow-md",
                      "data-ocid": `rights.legal_aid.${idx + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 space-y-3 flex flex-col h-full", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl leading-none mt-0.5", children: org.icon }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground leading-snug", children: org.name }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs mt-1", children: org.tag })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-sm text-muted-foreground flex-1 leading-relaxed", children: org.description }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "a",
                          {
                            href: org.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "data-ocid": `rights.legal_aid_link.${idx + 1}`,
                            className: "inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-smooth",
                            children: [
                              "Visit website",
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5" })
                            ]
                          }
                        )
                      ] })
                    }
                  )
                },
                org.name
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              onClick: onStartOver,
              "data-ocid": "rights.start_over_button",
              className: "gap-2 w-full sm:w-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
                "Start Over"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              "data-ocid": "rights.connect_advisor_button",
              className: "gap-2 w-full sm:w-auto",
              onClick: () => window.open(
                "https://www.antidiskriminierungsstelle.de/DE/Beratung/beratung_node.html",
                "_blank"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(UserCheck, { className: "w-4 h-4" }),
                "Connect with an Advisor"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-sm text-muted-foreground sm:ml-auto", children: "All conversations are confidential." })
        ] })
      ]
    }
  );
}
function Rights() {
  const questions = AGG_QUESTIONS;
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [answers, setAnswers] = reactExports.useState({});
  const [showResults, setShowResults] = reactExports.useState(false);
  const selectedAnswer = answers[currentIndex] ?? null;
  const handleSelect = reactExports.useCallback(
    (opt) => setAnswers((prev) => ({ ...prev, [currentIndex]: opt })),
    [currentIndex]
  );
  const handleNext = reactExports.useCallback(() => {
    if (!selectedAnswer) return;
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setShowResults(true);
    }
  }, [selectedAnswer, currentIndex, questions.length]);
  const handleBack = reactExports.useCallback(() => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }, [currentIndex]);
  const handleStartOver = reactExports.useCallback(() => {
    setAnswers({});
    setCurrentIndex(0);
    setShowResults(false);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border shadow-subtle", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/12 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "w-6 h-6 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "text-display-lg text-foreground",
                "data-ocid": "rights.page",
                children: "Rights Awareness Tool"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: "Free & Confidential" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-body-md text-muted-foreground max-w-xl", children: "You deserve to be treated fairly at work. This tool helps you understand whether your experience may involve a rights violation under German law (AGG — Allgemeines Gleichbehandlungsgesetz), and what support is available to you." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-start gap-2.5 rounded-xl bg-primary/5 border border-primary/15 px-4 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-4 h-4 text-primary mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-body-sm text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "You are not alone." }),
          " Many women face discrimination silently because they don't know their rights or fear consequences. This is a safe space — your answers are never stored or shared."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: !showResults ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      QuestionStep,
      {
        question: questions[currentIndex].question,
        hint: questions[currentIndex].hint,
        options: questions[currentIndex].options,
        stepIndex: currentIndex,
        totalSteps: questions.length,
        selected: selectedAnswer,
        onSelect: handleSelect,
        onNext: handleNext,
        onBack: handleBack
      },
      currentIndex
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.35 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResultsSection, { answers, onStartOver: handleStartOver })
      },
      "results"
    ) }) })
  ] });
}
export {
  Rights as default
};
