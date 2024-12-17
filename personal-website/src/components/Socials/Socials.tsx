import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Socials = () => {
  return (
    <div className="fixed bottom-10 md:right-5 right-1">
      <div className="flex flex-col items-end">
        {/* GitHub */}
        <a
          href="https://github.com/tazim04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="transition-all ease-in-out hover:bg-gray-100 hover:bg-opacity-10 p-3 rounded-full">
            <GitHubIcon />
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/tazim-khan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="transition-all ease-in-out hover:bg-gray-100 hover:bg-opacity-10 p-3 rounded-full">
            <LinkedInIcon />
          </div>
        </a>

        {/* Instagram */}
        <div className="flex items-center md:space-x-2">
          <span className="text-gray-300 md:text-sm text-xs font-semibold">
            Check out my art! <span className="md:inline hidden">-{">"}</span>
          </span>
          <a
            href="https://www.instagram.com/te3kayart/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="transition-all ease-in-out hover:bg-gray-100 hover:bg-opacity-10 p-3 rounded-full">
              <InstagramIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
