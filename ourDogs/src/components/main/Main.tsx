import "./main.scss";
// import text from "../../assets/info/text.json";

function Main() {
  function openPharagraph(event: React.MouseEvent<HTMLElement>): void {
    let neighbourNode: Element | null = event.currentTarget.nextElementSibling;
    if (neighbourNode?.className !== "main_p_order") {
      neighbourNode?.classList.add("main_p_order");
    } else neighbourNode?.classList.remove("main_p_order");
  }

  return (
    <>
      <article className="main_conteiner">
        <h1>Beaver Yorkshire Terrier</h1>

        <h2 onClick={(event) => openPharagraph(event)}>Origin History</h2>
        <p>
          The Beaver Yorkshire Terrier is a separate subspecies of the Yorkshire
          Terrier. The breed’s history began with a litter of white-spotted
          puppies born to a German Yorkie breeder in the 1980s. Werner and
          Gertrude Beaver had been breeding for about 20 years and were very
          interested in this breeding. They introduced black and white Yorkies
          at a show in Wiesbaden. A year later, they were registered in Germany,
          but it was not until 2007 that the final breed standard was signed. It
          is an interesting fact that in the name of the breed, you can see the
          prefix “a la Pom-Pon”, which translates to “colored ball of yarn”. The
          prefix originated from German singer Margot Eskens when her husband
          gave her a black and white puppy.
        </p>
        <h2 onClick={(event) => openPharagraph(event)}>Appearance</h2>
        <p>
          This breed is commonly referred to as a “toy that came to life”
          because of its appearance. The Beaver Yorkshire Terrier differs from
          ordinary Yorkshire Terriers in the shade of its coat. The head is
          proportional to the body. The neck is well defined and quite long. The
          eyes are medium-sized, usually of a darker shade. The ears are
          upright, triangle-shaped, set high. The teeth have a straight or
          scissor-shaped bite. The body is elongated; the tail is not cropped.
          The chest is well developed. The limbs are straight. The hair of the
          Biewer Terrier is very thick; the length of the hair grows to the
          floor. Chest, paws, and abdomen are always white. The body of the pet
          is usually white-blue, black and white, or bluish. There are also
          patches of black, white, or sandy hue on the head. Biewer Terriers
          tend to change their coat shade with age, depending on their genotype.
        </p>
        <h2 onClick={(event) => openPharagraph(event)}>Character</h2>
        <p>
          The character of the Beaver Yorkshire Terrier is very similar to the
          standard Yorkshire Terrier, but the ability to hunt has been lost. In
          general, it is a cheerful dog with an active attitude. It learns the
          world around it with interest, willingly comes into contact with other
          people and animals. With children, Biewer Terriers quickly find a
          common language. You only need to explain that you should not touch
          the dog while he’s sleeping or feeding, as this can disturb his
          psyche. The pets are great for keeping in an apartment. They retain
          their childlike spontaneity for life. At the same time, Biewer
          Terriers are very smart; once and for all, remember the house rules.
          The doggie is adapted to travel with the owner, so it is easy to get
          accustomed to a new place. It’s better to take it with you than leave
          it with strangers. It will only cause stress for the Biewer Terrier.
          Despite their small size, they are always ready to protect themselves
          and their owner if they feel threatened. Some owners of Beaver
          Yorkshire Terriers start to spoil their cute pets. But this doesn’t
          seem right; a pampered dog can be a big problem.
        </p>
        <h2 onClick={(event) => openPharagraph(event)}>Care</h2>
        <p>
          There are no special recommendations for the care of the Beaver
          Yorkshire Terrier. He should be bathed once a month with a special
          shampoo for long-haired dogs. The silky hair grows quickly, so the
          Biewer Terrier, like other Yorkies, needs to be trimmed. Even if he’s
          not a show dog, it will only make life easier. Wear warm clothing and
          special shoes in winter to protect his feet from road debris. Keep an
          eye on his ears and brush them after bathing or a brisk walk. Nails
          should be trimmed several times a month. Beaver Yorkshire Terriers can
          be stubborn and refuse to perform tasks during training. But if you
          find an approach to the pet, you can teach even circus tricks.
        </p>
        <h2 onClick={(event) => openPharagraph(event)}>Training</h2>
        <p>
          It is best to start training with the most basic rules, such as not
          taking food from your hands, going to the toilet in the right place,
          not pulling the leash. Only then can you burden the dog with learning
          commands. They can already recognize their owners at a young age.
          Successful training depends on an emotional understanding of the dog
          and the owner. A good tactic would be to reward at the end. You can
          take the tasty rewards with you on your walk and train your pet
          outdoors. Physical punishment should be avoided. Dogs are susceptible
          even to the owner’s intonation and will immediately sense an angry
          note.
        </p>
        <h2 onClick={(event) => openPharagraph(event)}>Common Diseases</h2>
        <p>
          Beaver Yorkshire Terriers have good immunity but don’t take any
          chances and walk your dog without clothes in cold weather. These dogs
          are prone to bronchitis. After a walk, check your pet’s coat for
          pests. Beaver Yorkshire Terrier teeth are prone to early decay. It
          should be noted that this breed does not tolerate anesthesia well.
          Biewer Terrier is prone to such diseases: dislocation of the kneecap;
          gum disease; eye irritation; extrahepatic shunt – surgical
          intervention is required; pancreatitis.
        </p>
        <h2 onClick={(event) => openPharagraph(event)}>Nutrition</h2>
        <p>
          Beaver Yorkshire Terriers are prone to obesity. Therefore, it is worth
          controlling the portions of the pet and does not forget about physical
          activity. The dog should be fed three times a day. The diet should be
          balanced. The dog will benefit from lean meat, cereals, and
          vegetables. Don’t forget vitamin supplements to maintain coat quality.
          Don’t forget the fats found in dairy products. Water should always be
          readily available for the Beaver Yorkshire Terrier.
        </p>
      </article>
    </>
  );
}

export default Main;
