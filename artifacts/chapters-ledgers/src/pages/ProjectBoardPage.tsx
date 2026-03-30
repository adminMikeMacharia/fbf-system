import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ClipboardList,
  DollarSign,
  Handshake,
  CheckCircle2,
  Circle,
  Clock,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  Mail,
  Globe,
  ExternalLink,
  BookOpen,
  Truck,
  Megaphone,
  Palette,
  Users,
  Send,
  Filter,
} from "lucide-react";
import {
  PROJECT_TASKS,
  COST_ITEMS,
  PARTNERS,
  MUGUMO_EMAIL,
  type ProjectTask,
} from "@/data/project-board";

const STATUS_CONFIG = {
  Open: { icon: Circle, color: "bg-gray-100 text-gray-700 border-gray-200" },
  "In Progress": { icon: Clock, color: "bg-blue-100 text-blue-700 border-blue-200" },
  Done: { icon: CheckCircle2, color: "bg-green-100 text-green-700 border-green-200" },
  Blocked: { icon: AlertTriangle, color: "bg-red-100 text-red-700 border-red-200" },
};

const PRIORITY_CONFIG = {
  Critical: "bg-red-600 text-white",
  High: "bg-orange-100 text-orange-800 border-orange-200",
  Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Low: "bg-gray-100 text-gray-600 border-gray-200",
};

const PARTNER_TYPE_COLORS = {
  Publisher: "bg-purple-100 text-purple-800",
  Distributor: "bg-blue-100 text-blue-800",
  Media: "bg-pink-100 text-pink-800",
  Platform: "bg-indigo-100 text-indigo-800",
  Sponsor: "bg-green-100 text-green-800",
  Collaborator: "bg-amber-100 text-amber-800",
};

const PARTNER_STATUS_COLORS = {
  Active: "bg-green-100 text-green-700",
  Prospective: "bg-gray-100 text-gray-600",
  "In Discussion": "bg-blue-100 text-blue-700",
  Contracted: "bg-emerald-100 text-emerald-800",
};

type Tab = "tasks" | "costing" | "partners";

function TaskCard({ task, expanded, onToggle }: { task: ProjectTask; expanded: boolean; onToggle: () => void }) {
  const statusCfg = STATUS_CONFIG[task.status];
  const StatusIcon = statusCfg.icon;
  const completedSubtasks = task.subtasks?.filter((s) => s.done).length ?? 0;
  const totalSubtasks = task.subtasks?.length ?? 0;

  return (
    <Card className="overflow-hidden">
      <div
        className="flex items-center gap-3 p-4 cursor-pointer hover:bg-muted/30 transition-colors"
        onClick={onToggle}
      >
        {expanded ? <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 shrink-0 text-muted-foreground" />}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-semibold truncate">{task.title}</h3>
            <Badge className={`text-[10px] ${statusCfg.color}`}>
              <StatusIcon className="w-3 h-3 mr-1" />
              {task.status}
            </Badge>
            <Badge className={`text-[10px] ${PRIORITY_CONFIG[task.priority]}`}>
              {task.priority}
            </Badge>
          </div>
          <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
            <span>{task.category}</span>
            {task.dueDate && <span>Due: {task.dueDate}</span>}
            {totalSubtasks > 0 && (
              <span>{completedSubtasks}/{totalSubtasks} subtasks</span>
            )}
          </div>
        </div>
        <div className="text-right shrink-0 hidden sm:block">
          <div className="text-xs text-muted-foreground">{task.assignedTo}</div>
          {task.estimatedHours && (
            <div className="text-xs">
              {task.loggedHours ?? 0}/{task.estimatedHours}h
            </div>
          )}
        </div>
      </div>

      {expanded && (
        <CardContent className="pt-0 pb-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-3">{task.description}</p>

          <div className="flex flex-wrap gap-4 text-xs mb-3">
            <span className="text-muted-foreground">Venture: <strong>{task.venture}</strong></span>
            <span className="text-muted-foreground">Created: <strong>{task.createdAt}</strong></span>
            {task.estimatedHours && (
              <span className="text-muted-foreground">
                Hours: <strong>{task.loggedHours ?? 0}</strong> / {task.estimatedHours} estimated
              </span>
            )}
          </div>

          {task.subtasks && task.subtasks.length > 0 && (
            <div className="space-y-1.5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Subtasks</h4>
              {task.subtasks.map((st, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  {st.done ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                  ) : (
                    <Circle className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  )}
                  <span className={st.done ? "line-through text-muted-foreground" : ""}>{st.label}</span>
                </div>
              ))}
            </div>
          )}

          {task.estimatedHours && (
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">
                  {Math.round(((task.loggedHours ?? 0) / task.estimatedHours) * 100)}%
                </span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: `${Math.min(100, ((task.loggedHours ?? 0) / task.estimatedHours) * 100)}%` }}
                />
              </div>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}

export default function ProjectBoardPage() {
  const [activeTab, setActiveTab] = useState<Tab>("tasks");
  const [expandedTask, setExpandedTask] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [emailSending, setEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const tabs = [
    { key: "tasks" as Tab, label: "Tasks", icon: ClipboardList, count: PROJECT_TASKS.length },
    { key: "costing" as Tab, label: "Costing", icon: DollarSign, count: COST_ITEMS.length },
    { key: "partners" as Tab, label: "Partners", icon: Handshake, count: PARTNERS.length },
  ];

  const filteredTasks = statusFilter === "all"
    ? PROJECT_TASKS
    : PROJECT_TASKS.filter((t) => t.status === statusFilter);

  const openCount = PROJECT_TASKS.filter((t) => t.status === "Open").length;
  const inProgressCount = PROJECT_TASKS.filter((t) => t.status === "In Progress").length;
  const doneCount = PROJECT_TASKS.filter((t) => t.status === "Done").length;
  const totalEstimated = PROJECT_TASKS.reduce((s, t) => s + (t.estimatedHours ?? 0), 0);
  const totalLogged = PROJECT_TASKS.reduce((s, t) => s + (t.loggedHours ?? 0), 0);

  const totalBudget = COST_ITEMS.reduce((s, c) => s + c.estimatedCost, 0);
  const totalActual = COST_ITEMS.reduce((s, c) => s + (c.actualCost ?? 0), 0);
  const paidItems = COST_ITEMS.filter((c) => c.status === "Paid").length;

  const handleSendEmail = async () => {
    setEmailSending(true);
    try {
      const apiBase = (import.meta.env.VITE_API_BASE as string | undefined)
        ? `${(import.meta.env.VITE_API_BASE as string).replace(/\/$/, "")}/api`
        : `${window.location.origin}${(import.meta.env.BASE_URL || "/").replace(/chapters-ledgers\/?$/, "")}api`;
      const resp = await fetch(`${apiBase}/comms/chapters-ledgers-summary`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: MUGUMO_EMAIL,
          tasks: PROJECT_TASKS,
          costs: COST_ITEMS,
          partners: PARTNERS,
        }),
      });
      if (resp.ok) {
        setEmailSent(true);
        setTimeout(() => setEmailSent(false), 5000);
      }
    } catch {
      // silently handle
    } finally {
      setEmailSending(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-wide mb-2">Project Board</h1>
          <p className="text-muted-foreground">
            Ledgers of Africa — Tasks, costing, and publishing partners for the Founders' Battlefield book series.
          </p>
        </div>
        <button
          onClick={handleSendEmail}
          disabled={emailSending}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#003153] text-white font-label font-medium text-sm hover:bg-[#002040] transition-colors disabled:opacity-50 shrink-0"
        >
          {emailSent ? (
            <>
              <CheckCircle2 className="w-4 h-4" /> Sent to Mugumo
            </>
          ) : emailSending ? (
            <>
              <Send className="w-4 h-4 animate-pulse" /> Sending...
            </>
          ) : (
            <>
              <Mail className="w-4 h-4" /> Email Summary to Mugumo
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">{openCount}</div>
            <div className="text-xs text-muted-foreground">Open Tasks</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{inProgressCount}</div>
            <div className="text-xs text-muted-foreground">In Progress</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{doneCount}</div>
            <div className="text-xs text-muted-foreground">Completed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold">{totalLogged}<span className="text-sm font-normal text-muted-foreground">/{totalEstimated}h</span></div>
            <div className="text-xs text-muted-foreground">Hours Logged</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center gap-1 mb-6 border-b border-border">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.key
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
              <span className="ml-1 text-xs bg-muted px-1.5 py-0.5 rounded-full">{tab.count}</span>
            </button>
          );
        })}
      </div>

      {activeTab === "tasks" && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <div className="flex gap-1 flex-wrap">
              {["all", "Open", "In Progress", "Done", "Blocked"].map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    statusFilter === s
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {s === "all" ? "All" : s} {s === "all" ? `(${PROJECT_TASKS.length})` : `(${PROJECT_TASKS.filter((t) => t.status === s).length})`}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                expanded={expandedTask === task.id}
                onToggle={() => setExpandedTask(expandedTask === task.id ? null : task.id)}
              />
            ))}
          </div>
        </div>
      )}

      {activeTab === "costing" && (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold">${totalBudget.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Total Budget</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">${totalActual.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Actual Spent</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{paidItems}/{COST_ITEMS.length}</div>
                <div className="text-xs text-muted-foreground">Paid Items</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-label font-semibold">Book Production Costing Sheet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Category</th>
                      <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Description</th>
                      <th className="text-right py-2 px-3 font-semibold text-muted-foreground">Estimated</th>
                      <th className="text-right py-2 px-3 font-semibold text-muted-foreground">Actual</th>
                      <th className="text-center py-2 px-3 font-semibold text-muted-foreground">Status</th>
                      <th className="text-left py-2 px-3 font-semibold text-muted-foreground">Vendor/Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COST_ITEMS.map((item) => (
                      <tr key={item.id} className="border-b border-border/50 hover:bg-muted/30">
                        <td className="py-2.5 px-3">
                          <Badge variant="outline" className="text-[10px]">{item.category}</Badge>
                        </td>
                        <td className="py-2.5 px-3 font-medium">{item.description}</td>
                        <td className="py-2.5 px-3 text-right font-mono">${item.estimatedCost.toLocaleString()}</td>
                        <td className="py-2.5 px-3 text-right font-mono">
                          {item.actualCost ? `$${item.actualCost.toLocaleString()}` : "—"}
                        </td>
                        <td className="py-2.5 px-3 text-center">
                          <Badge
                            className={`text-[10px] ${
                              item.status === "Paid"
                                ? "bg-green-100 text-green-700"
                                : item.status === "Approved"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {item.status}
                          </Badge>
                        </td>
                        <td className="py-2.5 px-3 text-xs text-muted-foreground">
                          {item.vendor && <span className="font-medium">{item.vendor}</span>}
                          {item.vendor && item.notes && " · "}
                          {item.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-border font-semibold">
                      <td className="py-3 px-3" colSpan={2}>Total</td>
                      <td className="py-3 px-3 text-right font-mono">${totalBudget.toLocaleString()}</td>
                      <td className="py-3 px-3 text-right font-mono">${totalActual.toLocaleString()}</td>
                      <td colSpan={2}></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "partners" && (
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Publisher", "Distributor", "Platform", "Collaborator"].map((type) => {
              const count = PARTNERS.filter((p) => p.type === type).length;
              return (
                <Badge key={type} variant="outline" className="text-xs">
                  {type === "Publisher" ? <BookOpen className="w-3 h-3 mr-1" /> : 
                   type === "Distributor" ? <Truck className="w-3 h-3 mr-1" /> :
                   type === "Platform" ? <Globe className="w-3 h-3 mr-1" /> :
                   <Users className="w-3 h-3 mr-1" />}
                  {count} {type}{count !== 1 ? "s" : ""}
                </Badge>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PARTNERS.map((partner) => (
              <Card key={partner.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-sm">{partner.name}</h3>
                      {partner.territory && (
                        <span className="text-xs text-muted-foreground">{partner.territory}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <Badge className={`text-[10px] ${PARTNER_TYPE_COLORS[partner.type]}`}>
                        {partner.type}
                      </Badge>
                      <Badge className={`text-[10px] ${PARTNER_STATUS_COLORS[partner.status]}`}>
                        {partner.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{partner.description}</p>
                  <div className="flex items-center gap-3">
                    {partner.website && (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" /> Website
                      </a>
                    )}
                    {partner.contactEmail && (
                      <a
                        href={`mailto:${partner.contactEmail}`}
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <Mail className="w-3 h-3" /> Contact
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
