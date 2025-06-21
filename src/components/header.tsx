// import { cn } from "@/lib/utils";
// import { Container } from "./container";
// import { LogoContainer } from "./logo-container";
// import { MainRoutes } from "@/lib/helper";
// import { NavLink } from "react-router-dom";
// import { ProfileContainer } from "@/containers/profile-container";
// import { ToggleContainer } from "@/containers/toggle-container";
// import { useAuth } from "@clerk/clerk-react";

// export const Header = () => {
//   const { userId } = useAuth();

//   return (
//     <header
//       className={cn("w-full border-b duration-150 transition-all ease-in-out")}
//     >
//       <Container>
//         <div className="flex items-center gap-4">
//           {/* logo section */}
//           <LogoContainer />
//           {/* nvigation section */}

//           <nav className="hidden md:flex items-center gap-3">
//             <ul className="flex items-center gap-6">
//               {MainRoutes.map((route) => (
//                 <NavLink
//                   className={({ isActive }) =>
//                     cn(
//                       "text-base text-neutral-600",
//                       isActive && "text-neutral-900 font-semibold"
//                     )
//                   }
//                   key={route.href}
//                   to={route.href}
//                 >
//                   {route.label}
//                 </NavLink>
//               ))}

//               {userId && (
//                 <NavLink
//                   className={({ isActive }) =>
//                     cn(
//                       "text-base text-neutral-600",
//                       isActive && "text-neutral-900 font-semibold"
//                     )
//                   }
//                   to={"/generate"}
//                 >
//                   Take an Interview
//                 </NavLink>
//               )}
//             </ul>
//           </nav>

//           <div className="ml-auto flex items-center gap-6">
//             {/* profile section */}
//             <ProfileContainer />
//             {/* toggle action */}
//             <ToggleContainer />
//           </div>
//         </div>
//       </Container>
//     </header>
//   );
// };
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";
import { MainRoutes } from "@/lib/helper";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "@/containers/profile-container";
import { ToggleContainer } from "@/containers/toggle-container";
import { useAuth } from "@clerk/clerk-react";

export const Header = () => {
  const { userId } = useAuth();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div className="flex items-center gap-4">
          {/* logo section */}
          <LogoContainer />

          {/* navigation section */}
          <nav className="hidden md:flex items-center gap-3">
            <ul className="flex items-center gap-6">
              {MainRoutes.map((route) =>
                route.href.startsWith("#") ? (
                  // Internal scroll links
                  <a
                    key={route.href}
                    href={route.href}
                    className="text-base text-neutral-600 hover:text-neutral-900 hover:font-semibold"
                    onClick={(e) => handleScroll(e, route.href)}
                  >
                    {route.label}
                  </a>
                ) : (
                  // Route-based navigation
                  <NavLink
                    key={route.href}
                    to={route.href}
                    className={({ isActive }) =>
                      cn(
                        "text-base text-neutral-600",
                        isActive && "text-neutral-900 font-semibold"
                      )
                    }
                  >
                    {route.label}
                  </NavLink>
                )
              )}

              {userId && (
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "text-base text-neutral-600",
                      isActive && "text-neutral-900 font-semibold"
                    )
                  }
                  to={"/generate"}
                >
                  Take an Interview
                </NavLink>
              )}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-6">
            {/* profile section */}
            <ProfileContainer />
            {/* toggle action */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};