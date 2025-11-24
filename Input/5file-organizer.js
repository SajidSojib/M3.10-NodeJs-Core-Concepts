const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'Output', 'messy-files');
const organizedDir = path.join(__dirname, '..', 'Output', 'organized-files');

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};
const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

function initializeDirectories() {
  if(!fs.existsSync(sourceDir)) {
      fs.mkdirSync(sourceDir, { recursive: true });
  }
  testFiles.forEach((file) => {
    fs.writeFileSync(path.join(sourceDir, file), `content of ${file}`);
  });
  console.log(`messy directory files are created`);

  if(!fs.existsSync(organizedDir)) {
      fs.mkdirSync(organizedDir, { recursive: true });
  }

  Object.keys(categories).forEach((category) => {
    const categoryDir = path.join(organizedDir, category);
    if(!fs.existsSync(categoryDir)) {
        fs.mkdirSync(categoryDir, { recursive: true });
    }
  });

  console.log(`organized directory files are created`);
}

function getCategory(file) {
  const ext = path.extname(file);
  for (const category in categories) {
    if (categories[category].includes(ext)) {
      return category;
    }
  }
  return "others";
}

function organizeFiles(){
    console.log(`file organizer\n`);
    console.log(`source: `, sourceDir);
    console.log(`destination: `, organizedDir);
    console.log('\n'+'-'.repeat(100)+'\n');

    const files = fs.readdirSync(sourceDir);
    if(files.length === 0) {
        console.log(`no files to work on!! directory is empty`);
        return;
    }
    console.log(`found ${files.length} files to organize\n`);

    const stats = {
        total: 0,
        byCategory: {}
    };

    files.forEach( file => {
        const sourcePath = path.join(sourceDir, file);
        const stat = fs.statSync(sourcePath);
        if(stat.isDirectory()) {
            return;
        }
        
        const category = getCategory(file);
        const destinationDir = path.join(organizedDir, category);
        const destinationPath = path.join(destinationDir, file);

        fs.copyFileSync(sourcePath, destinationPath);

        stats.total++;
        stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;

        console.log(`${file} (${stat.size}) is gone to ${category} category `);
    });
}

function showHelp(){
    console.log(`
    node file-organizer.js [options]

    Options:
    -h, --help: Show this help message
    -i, --initialize: Initialize the directories
    -o, --organize: Organize the files
    `);
}

const option = process.argv[2];
switch (option) {
    case '-h':
    case '--help':
        showHelp();
        break;
    case '-i':
    case '--initialize':
        initializeDirectories();
        break;
    case '-o':
    case '--organize':
        organizeFiles();
        break;
    default:
        console.log(`Invalid option: ${option}`);
        showHelp();
        break;
}