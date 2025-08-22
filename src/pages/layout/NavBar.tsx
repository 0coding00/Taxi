import React, { useState, useEffect } from "react";
import {
  Menu,
  LayoutDashboard,
  CarFront,
  LogOut,
  Users,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

  const menuItems = [
    { icon: LayoutDashboard, label: "الصفحة الرئيسية", link: "/home" },
    { icon: CarFront, label: "السائقون", link: "/drivers" },
    { icon: User, label: "الموظفون", link: "/employees" },
    { icon: Users, label: "المستخدمون", link: "/users" },
  ];
const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentIndex = menuItems.findIndex(item => item.link === location.pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname]);
  const handleNavigation = (link: string, index: number) => {
    setActiveIndex(index);
    navigate(link);
  };
  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };
  const signOutClickHandler = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="flex h-screen bg-muted">
      <aside
        className={cn(
          "border-r bg-background shadow-sm transition-all duration-300 flex flex-col",
          isCollapsed ? "w-16" : "w-60"
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          {!isCollapsed && (
            <h1 className="text-lg font-semibold tracking-tight">
              FLASH TAXI
            </h1>
          )}
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>
        <ScrollArea className="flex-1 px-2 py-4">
          <ul className="space-y-2">
            {menuItems.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeIndex === idx;
              return (
                <li key={idx}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    onClick={() => handleNavigation(item.link, idx)}
                    className={cn(
                      "w-full flex items-center gap-3 justify-between px-3 py-2 text-sm font-medium",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary",
                      isCollapsed && "justify-center"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    {!isCollapsed && <span>{item.label}</span>}
                  </Button>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
        <Separator />
        <div className="p-2">
          <Button
            variant="ghost"
            className={cn(
              "w-full flex items-center gap-3 justify-start",
              isCollapsed && "justify-center"
            )}
            onClick={signOutClickHandler}
          >
            {!isCollapsed && <span>تسجيل الخروج</span>}
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
