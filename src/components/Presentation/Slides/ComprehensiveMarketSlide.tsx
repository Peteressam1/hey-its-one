import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Euro, Calendar, Shield, ArrowRight, Target } from "lucide-react";

const ComprehensiveMarketSlide = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center px-8 py-12 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="floating-orb orb-primary" />
        <div className="floating-orb orb-accent" />
        <div className="floating-orb orb-warning" />
      </div>
      <div className="geometric-pattern" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            Market Analysis
          </h1>
        </motion.div>

        {/* Market Entry Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/30">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              Market Entry Strategy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground">Electronics Production</h3>
                  <Badge className="bg-primary text-primary-foreground">Primary Focus</Badge>
                </div>
                <p className="text-muted-foreground">
                  High throughput, frequent product changes, defects costly
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-foreground">Food & Beverage</h3>
                  <Badge variant="secondary">Expansion Market</Badge>
                </div>
                <p className="text-muted-foreground">
                  Similar dynamics, proven pain, expand Year 2+
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* TAM/SAM/SOM Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Electronics TAM/SAM/SOM */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-accent/30">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Target className="w-5 h-5 text-accent" />
              <span>Electronics Market</span>
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">TAM (DACH sites)</span>
                  <span className="text-lg font-bold text-foreground">40K-50K</span>
                </div>
                <div className="h-3 bg-background/50 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-primary/50 to-primary"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">SAM (addressable)</span>
                  <span className="text-lg font-bold text-foreground">~20K</span>
                </div>
                <div className="h-3 bg-background/50 rounded-full overflow-hidden">
                  <div className="h-full w-[50%] bg-gradient-to-r from-accent/50 to-accent"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">SOM (Year 1-3)</span>
                  <span className="text-lg font-bold text-foreground">5-100 sites</span>
                </div>
                <div className="h-3 bg-background/50 rounded-full overflow-hidden">
                  <div className="h-full w-[5%] bg-gradient-to-r from-warning/50 to-warning"></div>
                </div>
              </div>
            </div>
          </Card>

          {/* F&B TAM/SAM/SOM */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-accent/30">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Target className="w-5 h-5 text-accent" />
              <span>F&B Market</span>
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">TAM (DACH sites)</span>
                  <span className="text-lg font-bold text-foreground">30K-40K</span>
                </div>
                <div className="h-3 bg-background/50 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-primary/50 to-primary"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">SAM (addressable)</span>
                  <span className="text-lg font-bold text-foreground">~15K</span>
                </div>
                <div className="h-3 bg-background/50 rounded-full overflow-hidden">
                  <div className="h-full w-[40%] bg-gradient-to-r from-accent/50 to-accent"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">SOM (Year 2-4)</span>
                  <span className="text-lg font-bold text-foreground">0-50 sites</span>
                </div>
                <div className="h-3 bg-background/50 rounded-full overflow-hidden">
                  <div className="h-full w-[3%] bg-gradient-to-r from-warning/50 to-warning"></div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Business Model + ARR Projections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Business Model */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/30">
            <h3 className="text-xl font-bold text-foreground mb-4">Business Model</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Euro className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Setup Fee</p>
                  <p className="text-sm text-muted-foreground">€20K-50K per line (one-time)</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Subscription</p>
                  <p className="text-sm text-muted-foreground">€2K-5K per line/month</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-warning mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Optional SLA Support</p>
                  <p className="text-sm text-muted-foreground">+20-30% premium</p>
                </div>
              </div>
            </div>
          </Card>

          {/* ARR Projections */}
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-primary/30">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span>ARR Projections (3 Years)</span>
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Year 1 (5-10 sites)</span>
                  <span className="text-lg font-bold text-foreground">€240K-600K</span>
                </div>
                <div className="h-4 bg-background/50 rounded-full overflow-hidden">
                  <div className="h-full w-[10%] bg-gradient-to-r from-primary/50 to-primary"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Year 2 (25-40 sites)</span>
                  <span className="text-lg font-bold text-foreground">€1.2M-2.4M</span>
                </div>
                <div className="h-4 bg-background/50 rounded-full overflow-hidden">
                  <div className="h-full w-[40%] bg-gradient-to-r from-accent/50 to-accent"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Year 3 (80-150 sites)</span>
                  <span className="text-lg font-bold text-foreground">€3.8M-9M</span>
                </div>
                <div className="h-4 bg-background/50 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-warning/50 to-warning"></div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Expansion Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="p-6 bg-card/80 backdrop-blur-sm border border-accent/30">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Expansion Strategy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-xl bg-primary/10">
                  <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />
                </div>
                <h4 className="font-bold text-foreground">Vertical</h4>
                <p className="text-sm text-muted-foreground">
                  Same line type across multiple plants (repeatable playbook)
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-xl bg-accent/10">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-bold text-foreground">Horizontal</h4>
                <p className="text-sm text-muted-foreground">
                  Additional lines per existing customer (upsell)
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Target className="w-6 h-6 text-warning" />
                </div>
                <h4 className="font-bold text-foreground">Geographic</h4>
                <p className="text-sm text-muted-foreground">
                  DACH → EU → Global expansion
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveMarketSlide;
